export const fileFieldConfigs  = {
	required_single:
		{
			type: 'file',
			outterIdAttr: 'cf2-required_single',
			fieldId: 'required_single',
			fieldLabel: 'Required Single',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: true,
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'required_single',
			configOptions:
				{
					multiple: 'false',
					multiUploadText: 'false',
					allowedTypes: 'false'
				}
		},
	required_single_allow_png:
		{
			type: 'file',
			outterIdAttr: 'cf2-required_single',
			fieldId: 'required_single',
			fieldLabel: 'Required Single',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: true,
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'required_single',
			configOptions:
				{
					multiple: 'false',
					multiUploadText: 'false',
					allowedTypes: 'image/png'
				}
		},
	required_multiple_no_button_text:
		{
			type: 'file',
			outterIdAttr: 'cf2-required_multiple_no_button_text',
			fieldId: 'required_multiple_no_button_text',
			fieldLabel: 'Required Multiple No Button Text',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: true,
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'required_multiple_no_button_text',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'false',
					allowedTypes: 'false'
				}
		},
	required_multiple_has_button_text:
		{
			type: 'file',
			outterIdAttr: 'cf2-required_multiple_has_button_text',
			fieldId: 'required_multiple_has_button_text',
			fieldLabel: 'Required Multiple Has Button Text',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: true,
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'required_multiple_has_button_text',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'The Default Text',
					allowedTypes: 'false'
				}
		},
	not_required_single:
		{
			type: 'file',
			outterIdAttr: 'cf2-not_required_single',
			fieldId: 'not_required_single',
			fieldLabel: 'Not Required Single',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: 'false',
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'not_required_single',
			configOptions:
				{
					multiple: 'false',
					multiUploadText: 'false',
					allowedTypes: 'false'
				}
		},
	not_required_multiple_no_button_text:
		{
			type: 'file',
			outterIdAttr: 'cf2-not_required_multiple_no_button_text',
			fieldId: 'not_required_multiple_no_button_text',
			fieldLabel: 'Not Required Multiple No Button Text',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: 'false',
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'not_required_multiple_no_button_text',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'false',
					allowedTypes: 'false'
				}
		},
	not_required_multiple_has_button_text:
		{
			type: 'file',
			outterIdAttr: 'cf2-not_required_multiple_has_button_text',
			fieldId: 'not_required_multiple_has_button_text',
			fieldLabel: 'Not Required Multiple Has Button Text',
			fieldCaption: '',
			fieldPlaceHolder: '',
			required: 'false',
			fieldDefault: '',
			fieldValue: '',
			fieldIdAttr: 'not_required_multiple_has_button_text',
			configOptions:
				{
					multiple: 'true',
					multiUploadText: 'The Default Text',
					allowedTypes: 'false'
				}
		}
};
