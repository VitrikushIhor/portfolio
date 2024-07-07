import {rtkApi} from '@/service/rtkApi';

const deleteSkillApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		removeSkill: build.mutation<{ message: string }, string>({
			query: (id) => ({
				url: `/skillCategory/skill/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [{type: 'Skill', id}, {type: 'Skill', id: 'LIST'}],
		}),
	}),
});

export const {useRemoveSkillMutation} = deleteSkillApi;
