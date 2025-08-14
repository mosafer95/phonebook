import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import ContactList from '../components/ContactList';

export default function AdminPanelPage() {
	return (
		<Box sx={{ direction: 'rtl' }}>
			<Stack spacing={2} sx={{ mb: 3 }}>
				<Typography variant="h5">پنل مدیریت مخاطبین</Typography>
				<Typography variant="body2" color="text.secondary">
					در این بخش می‌توانید مخاطبین را مدیریت کنید: افزودن، ویرایش و حذف.
				</Typography>
				<Divider />
			</Stack>
			<ContactList admin={true} />
		</Box>
	);
}