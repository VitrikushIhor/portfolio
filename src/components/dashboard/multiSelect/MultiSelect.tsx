import React, {useEffect, useRef, useState} from 'react';
import {InterfaceBioRoles} from '@/types/bio.interface';
import styles from './styles.module.scss'
import {IoIosArrowDown, IoMdClose} from 'react-icons/io';


interface InterfaceMultiSelect {
	placeHolder: string;
	options: InterfaceBioRoles[];
	isMulti: boolean;
	isSearchable: boolean;
	onChange: (value: InterfaceBioRoles | InterfaceBioRoles[]) => void;
	defaultValue?: InterfaceBioRoles | InterfaceBioRoles[];
}

const MultiSelect: React.FC<InterfaceMultiSelect> = ({
	                                                     placeHolder,
	                                                     options,
	                                                     isMulti,
	                                                     isSearchable,
	                                                     onChange,
	                                                     defaultValue,
                                                     }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [selectedValue, setSelectedValue] = useState<InterfaceBioRoles | InterfaceBioRoles[] | null>(defaultValue || (isMulti ? [] : null));
	const [searchValue, setSearchValue] = useState('');
	const searchRef = useRef<HTMLInputElement | null>(null);
	const inputRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setSearchValue('');
		if (showMenu && searchRef.current) {
			searchRef.current.focus();
		}
	}, [showMenu]);

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
				setShowMenu(false);
			}
		};

		window.addEventListener('click', handler);
		return () => {
			window.removeEventListener('click', handler);
		};
	});

	const handleInputClick = () => {
		setShowMenu(!showMenu);
	};

	const getDisplay = () => {
		if (!selectedValue || (Array.isArray(selectedValue) && selectedValue.length === 0)) {
			return placeHolder;
		}
		if (isMulti && Array.isArray(selectedValue)) {
			return (
				 <div className={styles.dropdownTags}>
					 {selectedValue.map((option) => (
							<div key={option._id} className={styles.dropdownTagItem}>
								{option.name}
								<span onClick={(e) => onTagRemove(e, option)} className={styles.dropdownTagClose}>
								<IoMdClose/>
							</span>
							</div>
					 ))}
				 </div>
			);
		}
		return (selectedValue as InterfaceBioRoles).name;
	};

	const removeOption = (option: InterfaceBioRoles) => {
		return (selectedValue as InterfaceBioRoles[]).filter((o) => o._id !== option._id);
	};

	const onTagRemove = (e: React.MouseEvent, option: InterfaceBioRoles) => {
		e.stopPropagation();
		const newValue = removeOption(option);
		setSelectedValue(newValue);
		onChange(newValue);
	};

	const onItemClick = (option: InterfaceBioRoles) => {
		let newValue;
		if (isMulti && Array.isArray(selectedValue)) {
			if (selectedValue.findIndex((o) => o._id === option._id) >= 0) {
				newValue = removeOption(option);
			} else {
				newValue = [...selectedValue, option];
			}
		} else {
			newValue = option;
		}
		setSelectedValue(newValue);
		onChange(newValue);
	};

	const isSelected = (option: InterfaceBioRoles) => {
		if (isMulti && Array.isArray(selectedValue)) {
			return selectedValue.filter((o) => o._id === option._id).length > 0;
		}

		if (!selectedValue) {
			return false;
		}

		return (selectedValue as InterfaceBioRoles)._id === option._id;
	};

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const getOptions = () => {
		if (!searchValue) {
			return options;
		}

		return options.filter((option) => option.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
	};

	return (
		 <>
			 <span className={styles.title}>{placeHolder}</span>
			 <div className={styles.dropdownContainer}>
				 <div ref={inputRef} onClick={handleInputClick} className={styles.dropdownInput}>
					 <div className={styles.dropdownSelectedValue}>{getDisplay()}</div>
					 <div className={styles.dropdownTools}>
						 <div className={styles.dropdownTool}>
							 <IoIosArrowDown/>
						 </div>
					 </div>
				 </div>
				 {showMenu && (
						<div className={styles.dropdownMenu}>
							{isSearchable && (
								 <div className={styles.searchBox}>
									 <input onChange={onSearch} value={searchValue} ref={searchRef}/>
								 </div>
							)}
							{getOptions().map((option) => (
								 <div
										onClick={() => onItemClick(option)}
										key={option._id}
										className={`${styles.dropdownItem} ${isSelected(option) ? `${styles.selected}` : ''}`}
								 >
									 {option.name}
								 </div>
							))}
						</div>
				 )}
			 </div>
		 </>
	)
		 ;
};

export default MultiSelect;
