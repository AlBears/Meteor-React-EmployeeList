import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {

  //see if collection has any records
  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);
  if(! numberRecords ){
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()

      });
    });
  }
});
