import Validate from 'validate.js';

const rulesPricingForm = {
  autoMarkup:{
    presence: {allowEmpty: false}
  },
  stickerPrice:{
    lessThanWholesalePrice:{
      presence: {allowEmpty: false}
    }
  },
  onlinePrice:{
    presence: {allowEmpty: false}
  },
  wholesalePrice:{
    presence: {allowEmpty: false}
  },
  requiredDown:{
    presence: {allowEmpty: false}
  }
}

Validate.validators.presence.options = {
  message: "is a required field"
};

Validate.formatters.custom = function(errors) {
  const list = {};
  errors.map(function(error) {
    return list[error.attribute] = getError(error)
  });

  return list;
};

Validate.validators.lessThanWholesalePrice = function(value, options, key, attributes) {
  const valid = Validate.single(value, options);
  if (valid){
    return valid;
  }else if (value > attributes?.wholesalePrice){
    return 'Wholesale price should be more than the sticker price';
  }
};

const getError = (error) => {
  const length = error.attribute.replace(/[A-Z]/g, m => " " + m).length;
  const message = error.error.substring(length).trim();
  return message.charAt(0).toUpperCase() + message.slice(1);
}


export function validatePricingForm(formValues){
  return Validate(formValues, rulesPricingForm, {format: "custom"})
}
