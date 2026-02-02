import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    this.isBrowser = isPlatformBrowser(this.platformId);

  }

  // Set item in local storage
  setItem(key: string, value: any): void {

    if (!this.isBrowser) { return; }
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving to local storage', error);
    }

  };

  // Get item from local storage
  getItem<T>(key: string): T | null {

    if (!this.isBrowser) { return null; }
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error reading from local storage', error);
      return null;
    }

  };

  // Remove item from local storage
  removeItem(key: string): void {

    if (!this.isBrowser) { return; }
    localStorage.removeItem(key);

  };

  // Clear all local storage
  clear(): void {

    if (!this.isBrowser) { return; }
    localStorage.clear();

  };

  // Get all keys from local storage
  getKeys(): string[] {

    if (!this.isBrowser) { return []; }
    return Object.keys(localStorage);

  };

  // Get lenght of local storage
  length(): number {  

    if (!this.isBrowser) { return 0; }
    return localStorage.length;

  };

}
