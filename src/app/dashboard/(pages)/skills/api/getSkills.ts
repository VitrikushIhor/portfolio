import {rtkApi} from '@/service/rtkApi';
import {InterfaceSkill} from '@/types/skill.interface';

const getSkillsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getSkills: build.query<InterfaceSkill[], void>({
			query: () => ({
				url: '/skillCategory/skill',
			}),
			providesTags: (result) =>
				 result
						? [
							...result.map(({_id}) => ({type: 'Skill' as const, id: _id})),
							{type: 'Skill', id: 'LIST'},
						]
						: [{type: 'Skill', id: 'LIST'}],
		}),
	}),
});

export const {useGetSkillsQuery} = getSkillsApi;
