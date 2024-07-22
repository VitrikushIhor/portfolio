import {rtkApi} from '@/service/rtkApi';
import {InterfaceBio} from '@/types/bio.interface';

const getBioApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getBio: build.query<InterfaceBio, void>({
			query: () => ({
				url: '/bio',
			}),
			providesTags: ['Role'],
			transformResponse: (response: InterfaceBio[]) => {
				return response[0];
			},
		}),
	}),
});

export const useGetBoi = getBioApi.useGetBioQuery;
