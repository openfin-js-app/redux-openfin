export default class LocalStoragePersistence{

    prefix:string;

    constructor(idPrefix:string) {
        this.prefix = idPrefix;
    }

    retrieveRelationshipsFor(id:string):string[] {
        const storedRelationships = JSON.parse(localStorage.getItem(this.getFullStorageKey(id)));
        return storedRelationships || [];
    }

    removeRelationship(id1:string, id2:string):void {
        const currentPartners = this.retrieveRelationshipsFor(id1);
        const partnerIndex = currentPartners.indexOf(id2);
        if (partnerIndex === -1) {
            return;
        }

        currentPartners.splice(partnerIndex, 1);

        if (currentPartners.length > 0) {
            localStorage.setItem(this.getFullStorageKey(id1), JSON.stringify(currentPartners));
        } else {
            localStorage.removeItem(this.getFullStorageKey(id1));
        }
    }

    createRelationship(id1:string, id2:string):void {
        const partners = this.retrieveRelationshipsFor(id1);
        if (partners.indexOf(id2) !== -1) {
            return;
        }
        partners.push(id2);
        localStorage.setItem(this.getFullStorageKey(id1), JSON.stringify(partners));
    }

    createRelationshipsBetween(id1:string, id2:string):void {
        this.createRelationship(id1, id2);
        this.createRelationship(id2, id1);
    }

    removeAllRelationships(id:string):void {
        // grab existing partner windows before removing all trace of this window's persistence
        const currentPartners = this.retrieveRelationshipsFor(id);
        localStorage.removeItem(this.getFullStorageKey(id));

        // remove all 'reverse' relationships from partners too
        for (let i = 0; i < currentPartners.length; i++) {
            this.removeRelationship(currentPartners[i], id);
        }
    }

    getFullStorageKey(id:string):string {
        return `${this.prefix}.${id}`;
    }

}