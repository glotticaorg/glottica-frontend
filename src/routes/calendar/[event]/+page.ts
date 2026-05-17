import { error } from '@sveltejs/kit';
import { events } from '$lib/data/events';

export const load = ({ params }: { params: { event: string } }) => {
	const event = events.find((e) => e.slug === params.event);
	if (!event) error(404, 'Event not found');
	return { event };
};
