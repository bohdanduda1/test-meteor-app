import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export interface Link {
  _id?: string;
  title: string;
  url: string;
  createdAt: Date;
}

Meteor.methods({
  'links.addLink': function () {

  }
})

export const LinksCollection = new Mongo.Collection<Link>('links');
