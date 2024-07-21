import {rtkApi} from '@/service/rtkApi';
import {InterfaceSkillCategory} from '@/types/skillCategory.interface';

const getSkillCategoryApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getSkillCategory: build.query<InterfaceSkillCategory[], void>({
			query: () => ({
				url: '/skillCategory',
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

export const {useGetSkillCategoryQuery} = getSkillCategoryApi;
