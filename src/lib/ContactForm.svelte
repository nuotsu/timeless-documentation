<form method="post" action="https://formspree.io/f/myyqnnqr" class="grid md:grid-cols-2 gap-4">
	<label>
		<span class="technical text-xs">Name</span>
		<input
			class="input w-full"
			name="name"
			type="text"
			autocomplete="name"
			placeholder="John Smith"
			required
		/>
	</label>

	<label>
		<span class="technical text-xs">Email</span>
		<input
			class="input w-full"
			name="email"
			type="email"
			autocomplete="email"
			placeholder="john@example.com"
			required
		/>
	</label>

	<label class="col-span-full">
		<span class="technical text-xs">How can we help?</span>
		<textarea
			class="input w-full"
			name="message"
			placeholder="I need help with..."
		></textarea>
	</label>

	<p class="col-span-full">
		<button class="action" type="submit">Submit</button>
	</p>
</form>
