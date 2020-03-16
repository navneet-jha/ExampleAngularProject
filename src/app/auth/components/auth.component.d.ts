import { OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { NbAuthService } from '../services/auth.service';
export declare class NbAuthComponent implements OnDestroy {
    protected auth: NbAuthService;
    protected location: Location;
    private alive;
    subscription: any;
    authenticated: boolean;
    token: string;
    constructor(auth: NbAuthService, location: Location);
    back(): boolean;
    ngOnDestroy(): void;
}
