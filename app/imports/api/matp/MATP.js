import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../stuff/StuffCollection';
import { AdminProfiles } from '../user/AdminProfileCollection';
import { UserProfiles } from '../user/UserProfileCollection';
import { Testimonies } from '../testimony/TestimonyCollection';
import { Notices } from '../notice/NoticeCollection';
import { ScraperBills } from '../scraperBill/ScraperBillCollection';
import { Bills } from '../bill/BillCollection';

class MATPClass {
  collections;

  collectionLoadSequence;

  collectionAssociation;

  constructor() {
    // list of all the MATP collections
    this.collections = [
      AdminProfiles,
      Stuffs,
      UserProfiles,
      Testimonies,
      Notices,
      ScraperBills,
      Bills,
    ];
    /*
     * A list of collection class instances in the order required for them to be sequentially loaded from a file.
     */
    this.collectionLoadSequence = [
      AdminProfiles,
      UserProfiles,
      Stuffs,
      Testimonies,
      Notices,
      ScraperBills,
      Bills,
    ];

    /*
     * An object with keys equal to the collection name and values the associated collection instance.
     */
    this.collectionAssociation = {};
    this.collections.forEach((collection) => {
      this.collectionAssociation[collection.getCollectionName()] = collection;
    });

  }

  /**
   * Return the collection class instance given its name.
   * @param collectionName The name of the collection.
   * @returns The collection class instance.
   * @throws { Meteor.Error } If collectionName does not name a collection.
   */
  getCollection(collectionName) {
    // console.log('MATP', collectionName, this.collectionAssociation);
    const collection = this.collectionAssociation[collectionName];
    if (!collection) {
      throw new Meteor.Error(`Called MARTP.getCollection with unknown collection name: ${collectionName}`);
    }
    return collection;
  }
}

export const MATP = new MATPClass();
