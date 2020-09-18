const gridMixin = {
	data() {
		return {
			grid: {
				centerLeft: {
					topHeight: '25%',
					centerHeight: '25%',
					bottomHeight: '50%'
				},
				centerCenter: {
					topHeight: '12.5%',
					centerHeight: '62.5%',
					bottomHeight: '25%'
				},
				centerRight: {
					topHeight: '25%',
					centerHeight: '25%',
					bottomHeight: '50%'
				}
			}
		};
	}
};

export default gridMixin;
