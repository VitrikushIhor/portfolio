import {rtkApi} from '@/service/rtkApi';
import {InterfaceExperience} from '@/types/experience.interface';

const getExperienceApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getExperience: build.query<InterfaceExperience[], void>({
			query: () => ({
				url: '/experience',
			}),
		}),
	}),
});

export const {useGetExperienceQuery} = getExperienceApi;
