import {rtkApi} from '@/service/rtkApi';

const createSkillApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		createSkill: build.mutation<void, { data: FormData }>({
			query: ({data}) => ({
				url: `/skillCategory/skill`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const {useCreateSkillMutation} = createSkillApi;
