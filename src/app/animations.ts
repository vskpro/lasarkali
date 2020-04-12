import {
    trigger,
    transition, animate, style, query, group, keyframes
} from '@angular/animations';

export const fader =
    trigger('routeAnimation', [
        transition('* <=> *', [
            // Set a default  style for enter and leave
            query(':enter', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                }),
            ], { optional: true }),
            query(':leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                }),
            ], { optional: true }),
            // Animate the enter page in
            group([
                query(':enter', [
                    animate('800ms ease', keyframes([
                        style({ opacity: 0.2, transform: 'translateY(90%) scale(0.1) rotateX(40deg)', offset: 0 }),
                        style({ opacity: 0.3, transform: 'scale(0.2) translateY(75%) ', offset: 0.2 }),
                        style({ opacity: 0.4, transform: 'scale(0.4) translateY(55%) rotateX(30deg)', offset: 0.4 }),
                        style({ opacity: 0.6, transform: 'scale(0.6) translateY(35%) rotateX(20deg)', offset: 0.6 }),
                        style({ opacity: 0.8, transform: 'scale(0.8) translateY(15%) rotateX(10deg)', offset: 0.8 }),
                        style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
                    ])),
                ], { optional: true }),
                // Animate the leave page in
                query(':leave', [
                    animate('600ms ease', keyframes([
                        style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
                        style({ opacity: 1, transform: 'scale(0.8)', offset: 0.2 }),
                        style({ opacity: 1, transform: 'scale(0.7)', offset: 0.3 }),
                        style({ opacity: 1, transform: 'scale(0.6)', offset: 0.4 }),
                        style({ opacity: 1, transform: 'scale(0.5)', offset: 0.5 }),
                        style({ opacity: 1, transform: 'scale(0.4)', offset: 0.6 }),
                        style({ opacity: 1, transform: 'scale(0.3)', offset: 0.7 }),
                        style({ opacity: 1, transform: 'scale(0.2)', offset: 0.8 }),
                        style({ opacity: 1, transform: 'scale(0.1)', offset: 0.9 }),
                        style({ opacity: 1, transform: 'scale(0)', offset: 1 }),
                    ])),
                ], { optional: true })
            ])

        ]),
    ]);
