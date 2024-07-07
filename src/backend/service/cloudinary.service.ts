import cloudinary from '@/backend/config/cloudinary';

export const cloudinaryService = async (image: string, folder: string, name: string) => {
	return await cloudinary.uploader.upload(`${image}`, {
		folder: `portfolio/${folder}`,
		public_id: `${name}_${Date.now()}`,
	})
}
