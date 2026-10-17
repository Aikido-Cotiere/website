declare global {
	interface Date {
		getAge(): number;
	}
}

	Object.defineProperty(Date.prototype, "getAge", {
		configurable: true,
		value: function getAge(this: Date): number {
			if (Number.isNaN(this.getTime())) {
				return Number.NaN;
			}

			const today = new Date();
			let age = today.getFullYear() - this.getFullYear();
			const birthdayNotReached = today.getMonth() < this.getMonth()
				|| (today.getMonth() === this.getMonth() && today.getDate() < this.getDate());

			if (birthdayNotReached) {
				age--;
			}

			return age;
		},
		writable: true,
	});

export default defineNuxtPlugin(() => {});