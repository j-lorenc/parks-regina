import Case from 'case';
import CONFIG from '../config/api'

const NameCase = () => {
	return Case.type('name', (s) => {

		s = Case.lower(s, null, true);
		s = Case.capital(s, null, true);
		const nameTransforms = CONFIG.STRING.CASE.NAME_TRANSFORMS;
		const nameReplacements = CONFIG.STRING.CASE.NAME_REPLACEMENTS;

		nameTransforms.forEach((transform)=>{
			s = capitalizeAllAfterString(s, transform)
		});

		nameReplacements.forEach((replacement)=>{
			s = s.replace(replacement.RAW_VALUE, replacement.REPLACEMENT_VALUE)
		})

		return s;
	});
};

export default {
	NameCase: NameCase()
};

const capitalizeAllAfterString = (rawString, filterString)  => {
	const foundIndex = rawString.indexOf(filterString);

	if(foundIndex > -1){
		const afterFoundIndex = foundIndex + filterString.length;
		rawString = rawString.substring(0, afterFoundIndex) + Case.title(rawString.substring(afterFoundIndex, rawString.length))
		return rawString;
	}
	return rawString;
}
