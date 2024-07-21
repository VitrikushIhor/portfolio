import {rtkApi} from '@/service/rtkApi';
import {InterfaceExperience} from '@/types/experience.interface';

const getExperienceByIdApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getExperienceById: build.query<InterfaceExperience, string>({
			query: (_id) => ({
				url: `/experience/${_id}`,
			}),
		}),
	}),
});

export const {useGetExperienceByIdQuery} = getExperienceByIdApi;
