import {LightningElement, track} from 'lwc';

const groupBy = key => array =>
  array.reduce ((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat (obj);
    return objectsByKeyValue;
  }, {});

const groupByTeam = groupBy ('team');

export default class PersonCard extends LightningElement {
  @track people = [
    {
      firstName: 'Vaibhav',
      lastName: 'Jain',
      shortTitle: 'SMTS',
      email: 'jain.vaibhav@salesforce.com',
      title: 'Senior Member of Technical Staff',
      discipline: 'Engineering',
      location: 'Hyderabad',
      team: 'Modern Apps Building Blocks',
      image: '../../../people/vaibhav_jain.jpeg',
    },
    {
      firstName: 'Yash',
      lastName: 'Sharma',
      shortTitle: 'AMTS',
      email: 'yash.sharma@salesforce.com',
      title: 'Associate Member of Technical Staff',
      discipline: 'Engineering',
      location: 'Hyderabad',
      team: 'Modern Apps Building Blocks',
      image: '../../../people/yash_sharma.jpeg',
    },
    {
      firstName: 'Lavina',
      lastName: 'Sachdev',
      shortTitle: 'SMTS',
      email: 'lsachdev@salesforce.com',
      title: 'Senior Member of Technical Staff',
      discipline: 'Engineering',
      location: 'Hyderabad',
      team: 'MAB',
      image: '../../../people/lavina_sachdev.jpeg',
    },
  ];

  get peopleByTeam () {
    let arr = groupByTeam (this.people);

    // arr.map ((team, index) => {
    //   return {
    //     ...team,
    //     id: index,
    //   };
    // });

    console.log (JSON.stringify (arr));
    return arr;
  }
}
