import {InterfaceSkill} from '@/types/skill.interface';

export interface InterfaceSkillCategory {
	_id: string;
	title: string;
	skills: InterfaceSkill[];
}
