import {InjectionToken} from '@angular/core';
import {CdkDropList} from "@angular/cdk/drag-drop";

export const DRAG_N_DROP_PROVIDER_FACTORY = new InjectionToken<DragNDropProviderFactory>('Factory des providers de drag and drop', {
  providedIn: 'root',
  factory: () => new DragNDropProviderFactory()
})

export class DragNDropProviderFactory {

  private readonly providers = new Map<string, DragNDropProvider>();

  getProvider(contextId: string) {
    const provider = this.providers.get(contextId);
    if (!provider) {
      throw new Error(`DragNDropProvider with context '${contextId}' does not exist !`);
    }
    return provider;
  }

  createIfNotExistAndGet(contextId: string) {
    const provider = this.providers.get(contextId);
    if (provider) {
      return provider;
    }
    const newProvider = new DragNDropProvider(contextId);
    this.providers.set(contextId, newProvider);
    return newProvider;
  }
}

export class DragNDropProvider {
  contextId: string;
  connectedDropList: CdkDropList[] = [];

  constructor(contextId: string) {
    this.contextId = contextId;
  }

  registerDropList(...cdkDropLists: CdkDropList[]) {
    const newIds = cdkDropLists.map(list => list.id);
    if (cdkDropLists.length !== newIds.length) {
      console.warn(`Duplicate entry in this CdkDropList ids : ${newIds}`)
    }
    const existingIds = this.connectedDropList
      .map(cdkDropList => {
        let connectedTo: (string | CdkDropList)[] = [];
        if (Array.isArray(cdkDropList.connectedTo)) {
          connectedTo = cdkDropList.connectedTo;
        } else if (cdkDropList.connectedTo) {
          connectedTo = [cdkDropList.connectedTo]
        }
        cdkDropList.connectedTo = [...connectedTo, ...newIds]
        return cdkDropList.id;
      });
    const duplicates = newIds.filter(id => existingIds.includes(id));
    if (duplicates.length) {
      console.warn(`This CdkDropList ids are duplicated with existing ids : ${duplicates}`);
    }
    cdkDropLists.forEach(cdkDropList => {
      cdkDropList.connectedTo = [...existingIds, ...newIds.filter(id => cdkDropList.id !== id)];
    })
    this.connectedDropList.push(...cdkDropLists);
  }
}
