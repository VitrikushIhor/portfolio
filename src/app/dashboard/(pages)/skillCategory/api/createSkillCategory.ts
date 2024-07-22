import {rtkApi} from '@/service/rtkApi';

const createSkillCategoryApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		createSkillCategory: build.mutation<void, { title: string, skills: string[] }>({
			query: (data) => ({
				url: `/skillCategory`,
				method: 'POST',
				body: {
					...data,
				},
			}),
		}),
	}),
});

export const {useCreateSkillCategoryMutation} = createSkillCategoryApi;
