import {rtkApi} from '@/service/rtkApi';
import {InterfaceSkill} from '@/types/skill.interface';

const updateSkillApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		updateSkill: build.mutation<InterfaceSkill, { data: FormData, id: string }>({
			query: ({data, id}) => ({
				url: `/skillCategory/skill/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: (result) => [
				{type: 'Skill', id: result?._id},
				{type: 'Skill', id: 'LIST'},
			],
		}),
	}),
});

export const {useUpdateSkillMutation} = updateSkillApi;
