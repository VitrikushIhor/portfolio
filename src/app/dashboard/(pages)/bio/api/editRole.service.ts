import {rtkApi} from '@/service/rtkApi';
import {InterfaceBio} from '@/types/bio.interface';

const roleApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		editRole: build.mutation<string, { data: InterfaceBio, id: string }>({
			query: ({data, id}) => ({
				url: `/bio/${id}`,
				method: 'POST',
				body: {
					...data,
				},
			}),
			invalidatesTags: ['Role'],
		}),
	}),
});

export const useEditBio = roleApi.useEditRoleMutation;
