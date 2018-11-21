const CONFIG = {
	
	APIS: {
		PARKS: "https://api.parks.regina.services/parks"
	},

	STRING: {
		CASE: {
			NAME_TRANSFORMS: ["Mc", "mc"],
			NAME_REPLACEMENTS: [{
				RAW_VALUE:"O_Neill",
				REPLACEMENT_VALUE:"O'Neill"
			},{
				RAW_VALUE:"Er ",
				REPLACEMENT_VALUE:"Environmental Reserve "
			},{
				RAW_VALUE:"Macneill",
				REPLACEMENT_VALUE:"MacNeill"
			}]
		}
	}
	
}


export default CONFIG
