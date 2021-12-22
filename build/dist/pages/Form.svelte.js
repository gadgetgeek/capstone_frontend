/* src/pages/Form.svelte generated by Svelte v3.44.3 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	is_function,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_input_value,
	space
} from "../../_snowpack/pkg/svelte/internal.js";

import { navigate } from "../../_snowpack/pkg/svelte-routing.js";

function create_fragment(ctx) {
	let div;
	let form;
	let input0;
	let t0;
	let input1;
	let t1;
	let input2;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			form = element("form");
			input0 = element("input");
			t0 = space();
			input1 = element("input");
			t1 = space();
			input2 = element("input");
			attr(input0, "type", "text");
			attr(input0, "placeholder", "activity");
			attr(input1, "type", "text");
			attr(input1, "placeholder", "time");
			attr(input2, "type", "submit");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, form);
			append(form, input0);
			set_input_value(input0, /*activity*/ ctx[1]);
			append(form, t0);
			append(form, input1);
			set_input_value(input1, /*time*/ ctx[2]);
			append(form, t1);
			append(form, input2);
			set_input_value(input2, /*buttonLabel*/ ctx[0]);

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[8]),
					listen(input1, "input", /*input1_input_handler*/ ctx[9]),
					listen(input2, "input", /*input2_input_handler*/ ctx[10]),
					listen(form, "submit", function () {
						if (is_function(/*handleSubmit*/ ctx[3])) /*handleSubmit*/ ctx[3].apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (dirty & /*activity*/ 2 && input0.value !== /*activity*/ ctx[1]) {
				set_input_value(input0, /*activity*/ ctx[1]);
			}

			if (dirty & /*time*/ 4 && input1.value !== /*time*/ ctx[2]) {
				set_input_value(input1, /*time*/ ctx[2]);
			}

			if (dirty & /*buttonLabel*/ 1) {
				set_input_value(input2, /*buttonLabel*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { dids } = $$props;
	let { id } = $$props;
	let { url } = $$props;
	let { getDids } = $$props;
	let buttonLabel = "Create Did"; //default for submit button text
	let activity = ""; //default for activity field
	let time = ""; //default value for time field

	//default values of handle submit for creating dids
	let handleSubmit = async event => {
		event.preventDefault();

		await fetch(url, {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				//pickOne,
				activity,
				time
			})
		});

		getDids();
		navigate("/", { replace: true });
	};

	//if id is defined, reconfigure for editing
	if (id) {
		buttonLabel = "Edit the Did";
		let post = dids.find(p => p._id == id);

		//pickOne = post.pickOne;
		activity = post.activity;

		time = post.time;

		handleSubmit = async event => {
			event.preventDefault();

			await fetch(url + id + "/", {
				method: "put",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					id,
					//pickOne,
					activity,
					time
				})
			});

			getDids();
			navigate("/", { replace: true });
		};
	}

	function input0_input_handler() {
		activity = this.value;
		$$invalidate(1, activity);
	}

	function input1_input_handler() {
		time = this.value;
		$$invalidate(2, time);
	}

	function input2_input_handler() {
		buttonLabel = this.value;
		$$invalidate(0, buttonLabel);
	}

	$$self.$$set = $$props => {
		if ('dids' in $$props) $$invalidate(4, dids = $$props.dids);
		if ('id' in $$props) $$invalidate(5, id = $$props.id);
		if ('url' in $$props) $$invalidate(6, url = $$props.url);
		if ('getDids' in $$props) $$invalidate(7, getDids = $$props.getDids);
	};

	return [
		buttonLabel,
		activity,
		time,
		handleSubmit,
		dids,
		id,
		url,
		getDids,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class Form extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { dids: 4, id: 5, url: 6, getDids: 7 });
	}
}

export default Form;