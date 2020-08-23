import { LightningElement,wire } from 'lwc';
import getcontacts from '@salesforce/apex/contactController.getcontacts';
export default class contactList extends LightningElement {
    @wire (getcontacts) contacts;
}