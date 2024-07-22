import {rtkApi} from '@/service/rtkApi';
import {InterfaceExperience} from '@/types/experience.interface';

const updateExperienceApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		updateExperience: build.mutation<InterfaceExperience, { data: FormData, id: string }>({
			query: ({data, id}) => ({
				url: `/experience/${id}`,
				method: 'PATCH',
				body: data,
			}),
		}),
	}),
});

export const {useUpdateExperienceMutation} = updateExperienceApi;
