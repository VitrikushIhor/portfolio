import {rtkApi} from '@/service/rtkApi';

const roleApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		role: build.mutation<void, { name: string }>({
			query: ({name}) => ({
				url: `/bio/roles`,
				method: 'POST',
				body: {
					name,
				},
			}),
			invalidatesTags: ['Role'],
		}),
	}),
});

export const useRoleMutation = roleApi.useRoleMutation;
