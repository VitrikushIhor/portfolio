import {rtkApi} from '@/service/rtkApi';

const deleteSkillCategoryApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		removeSkillCategory: build.mutation<{ message: string }, string>({
			query: (id) => ({
				url: `/skillCategory/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [{type: 'Skill', id}, {type: 'Skill', id: 'LIST'}],
		}),
	}),
});

export const {useRemoveSkillCategoryMutation} = deleteSkillCategoryApi;
