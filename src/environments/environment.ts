export const environment = {
  production: true,
  products: [
    {
      title: 'Smile 32 Toothpaste',
      // tagline: 'Aapki hassi ki pehchaan - <strong>Smile32</strong> Toothpaste',
      tagline: '<strong>Smile32</strong> Toothpaste - For that winning smile!',
      image_url: 'assets/images/products/toothpaste.png',
      link: 'smile-32-toothpaste',
      content: {
        paras: [
          // tslint:disable-next-line:max-line-length
          'Smile32 Toothpaste is an anti-cavity toothpaste that concentrates on strengthening not only your teeth but also your gums. Its unique composition consists of calcium and minerals. The technology used helps to prevent your teeth from decaying and cavities. You can now smile vibrantly and show off all of your teeth confidently with Smile32 toothpaste!',
        ],
        freeItemLine: '<strong>Free toothbrush</strong> available on purchase of product.',
        quantity: ['180g']
      }
    },
    {
      title: 'Dishsaaf',
      // tagline: 'Clean dishes, clean health',
      tagline: 'Clean dishes, healthy life!',
      image_url: 'assets/images/products/Diah Wash.png',
      link: 'prim-gel',
      content: {
        paras: [
          // tslint:disable-next-line:max-line-length
          'Make the chore of cleaning dishes hassle free with Prim Dishwashing liquid. Unlike dishwash bars which leave residue on utensils, Prim liquid leaves your dishes spotless and germ-free. The special formulation of active molecules ensures that a single spoon of Prim liquid can clean an entire sink of used utensils.'
        ],
        list: {
          title: 'Features include:',
          points: [
            'Active cleaning boosters',
            'Concentrated power of 100 lemons',
            'No leftover residue'
          ]
        },
        quantity: ['400g']
      }
    },
    {
      title: 'Sukoon Incense Sticks',
      // tagline: 'Will leave you sleeping like a baby!',
      tagline: 'For that perfect nap you have wanted, Happy sleeping!',
      image_url: 'assets/images/products/sukoon - mosquitorepellant.png',
      link: 'sukoon',
      content: {
        paras: [
          // tslint:disable-next-line:max-line-length
          'Are you tired of mosquitoes? Try out our aromatic range of incense sticks. This two-in-one fragrance smoke is made up of active ingredients that protect you from mosquito bites. Just a whiff of this citronella fragrance is sure to bring out the positive energy in you! Long-lasting and absolutely safe, Sukoon’s incense sticks are also eco-friendly.',
          'This natural air freshener has a stress-bursting impact and will surely leave you sleeping like a baby!'
        ]
      }
    },
    {
      title: 'Koolkids',
      // tagline: 'Teach your kids dental hygiene the fun way!',
      tagline: 'Because your kid deserves it',
      image_url: 'assets/images/products/koolkids.png',
      link: 'kool-kids',
      content: {
        paras: [
          // tslint:disable-next-line:max-line-length
        'Spark up your kid’s interest in maintaining oral hygiene with our glittering range of toothpaste. Actively enriched with fluoride, your child will have fun while fighting cavities. Our fun and fruity flavours designed by dental experts will transform ‘plain old brushing’ to an awesome blast of fruity freshness! Moreover, the sparkly range of colours will have your child excited to brush every day.'
        ],
        list: {
          title: 'Koolkids Toothpaste Provides:',
          points: [
            'Triple protection from tooth enamel decay and cavities',
            'Low abrasiveness',
            'Funky flavours'
          ]
        },
        quantity: ['200g', '100g', '50g']
      }
    },
    {
      title: 'Smile32 Mouth Ulcer Gel',
      tagline: 'Mouth corners as smooth as butter',
      image_url: 'assets/images/products/smile32 - mouthulcergel.png',
      link: 'smile-32-mouth-ulcer-gel',
      content: {
        paras: [
          'Are you a having a sore case of mouth ulcers? Smile32 Mouth Ulcer Gel may be just what you were looking for!'
        ],
        list: {
          points: [
            'Provides instant pain relief from inflammation',
            'Reduces and eradicates canker sores',
            'No side effects',
            'Anti-septic formula'
          ]
        },
        quantity: ['10g']
      }
    },
    {
      title: 'Handsaaf',
      tagline: 'Treat your hands to luxury!',
      image_url: 'assets/images/products/hand wash mocaup_Purple.png',
      link: 'pure-palms',
      content: {
        paras: [
          // tslint:disable-next-line:max-line-length
          'Experience exquisiteness with our range of handwashes. The antibacterial agent in our formula gets rid of germs while moisturising your hands. Enriched with gold extract and vitamin E to keep your skin from ageing by getting rid of dead skin cells- leaving your hands with a smooth texture.'
        ],
        list: {
          title: 'Experience magic in three different flavours:',
          points: ['Lavender', 'Green Apple', 'Lemon']
        }
      }
    }
  ]
};
