import {InterfaceBio} from '@/types/bio.interface';
import {InterfaceSkillCategory} from '@/types/skillCategory.interface';
import {InterfaceExperience} from '@/types/experience.interface';
import {InterfaceProject} from '@/types/project.interface';


export interface IResponse {
	bio: InterfaceBio[]
	skillCategory: InterfaceSkillCategory[]
	experience: InterfaceExperience[]
	projects: InterfaceProject[]
}


