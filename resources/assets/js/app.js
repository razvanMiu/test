Vue.component('image-modal', {
	props: ['src', 'alt'],

	template: 	`<div class="modal is-active">
				  <div class="modal-background"></div>
				  <div class="modal-content">
		   			<slot></slot>
				  </div>
				  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
				</div>`,

	mounted: function () {
		ImageMap('img[usemap]');
	},
})

Vue.component('message', {
	props: ['title'],

	data() {
		return {
			isVisible: true
		};
	},

	template: 	`<article class="message" v-show="isVisible">
					<div class="message-header">
						{{ title }}

						<button @click='isVisible = false'>x</button>
					</div>

					<div class="message-body">
						<slot></slot>
					</div>
				</article>`,	
})

new Vue({
	el: '#root',

	data: {
		showModal: false,
	},

	methods: {
		toggleModal: function() {
			this.showModal = true;
		},
	}
});


$(function () {
		ImageMap('img[usemap]');
});