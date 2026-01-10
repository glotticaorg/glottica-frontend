<script>
	import DocumentHeader from '$lib/components/DocumentHeader.svelte';
	import InteractivePrivacyIcon from '$lib/components/InteractivePrivacyIcon.svelte';
	import LegalText from '$lib/components/LegalText.svelte';
	import Link from '$lib/components/Link.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<DocumentHeader
	header="Privacy statement"
	description="We are committed to protecting your privacy"
>
	<InteractivePrivacyIcon />
</DocumentHeader>

<LegalText>
	<SectionHeader>Our privacy statement</SectionHeader>
	<Paragraph>
		Our systems are in full compliance with the EU <Link href="https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng">GDPR</Link> and Dutch legislation.
		At registration on our platform we collect the following details: your email address, the password you configure, and your name. While using our site we maintain the following records: learning material activity. For learning material activity we only maintain the day that certain topics were accessed. As we do not believe it would be helpful to the user experience, all data we store on your learning material is automatically hard deleted from our servers after two months. This means we are not able to recover it.
		Your password and email address are used to allow for you to log on to our platform. Your email address is used to reach you for scheduled reminders or to reset your password and we use your name to address you in our correspondence with you, and your learning material activity is used to provide a better user experience by showing relevant material on your home screen.
	</Paragraph>
	<Paragraph>
		We do not sell or share the data we collect with any third party and your data is always encrypted on our servers. In the case of any lawful subpoena we would be forced to provide the relevant information to the authorities.
		In the case of account deletion, all data pertaining to your activity and your account is hard deleted from our servers. This means that recovery of this data is impossible. Due to this, account deletion is irreversible.
		Your credentials are hashed securely before being stored on our servers. When logging in to our platform, your hashed credentials do not leave our servers.
	</Paragraph>
</LegalText>
