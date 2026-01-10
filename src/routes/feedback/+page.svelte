<script>
	import Input from "$lib/components/Input.svelte";
	import LegalText from "$lib/components/LegalText.svelte";
	import Paragraph from "$lib/components/Paragraph.svelte";
	import PlainDocumentHeader from "$lib/components/PlainDocumentHeader.svelte";
	import Select from "$lib/components/Select.svelte";
	import TextArea from "$lib/components/TextArea.svelte";
</script>

<PlainDocumentHeader>Feedback</PlainDocumentHeader>

<LegalText>
	<Paragraph>
		If you have any feedback or other ideas on how we can improve our platform, please let
		us know through this form! We try to reply to requests within three weeks of receival.
	</Paragraph>
	<Select name="topic" label="Type">
		<option value="accessibility">Accessibility</option>
		<option value="cybersecurity">Cybersecurity</option>
		<option value="features">Features</option>
		<option value="learning">Learning materials</option>
		<option value="productivity">Productivity tools</option>
		<option value="other">Other</option>
	</Select>
	<Input name="email" type="email" label="Email" />
	<TextArea name="feedback" label="Feedback" />
</LegalText>
