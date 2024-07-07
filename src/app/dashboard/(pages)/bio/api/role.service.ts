import {rtkApi} from '@/service/rtkApi';

const deleteRoleApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		deleteRole: build.mutation<void, { _id: string }>({
			query: ({_id}) => ({
				url: `/bio/roles/${_id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Role'],
		}),
	}),
});

export const useDeleteRole = deleteRoleApi.useDeleteRoleMutation;
