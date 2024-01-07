import { Component } from '@angular/core';
import { Product } from 'src/app/types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: Product[] = [
    {
      'kind': 'books#volume',
      'id': 'h56jAgAAQBAJ',
      'etag': 'oMHNd+479L8',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/h56jAgAAQBAJ',
      'volumeInfo': {
        'title': 'Effective Information Retrieval from the Internet',
        'subtitle': 'An Advanced User’s Guide',
        'authors': [
          'Alison Stacey',
          'Adrian Stacey'
        ],
        'publisher': 'Elsevier',
        'publishedDate': '2004-07-31',
        'description': 'Effective Information Retrieval from the Internet discusses practical strategies which enable the advanced web user to locate information effectively and to form a precise evaluation of the accuracy of that information. Although the book provides a brief but thorough review of the technologies which are available for these purposes, most of the book concerns practical ‘future-proof’ techniques which are independent of changes in the tools available. For example, the book covers: how to retrieve salient information quickly; how to remove or compensate for bias; and tuition of novice Internet users. Importantly, the book enables readers to develop strategies which will continue to be useful despite the rapidly-evolving state of the Internet and Internet technologies - it is not about technological tricks Enables readers to be aware of and compensate for bias and errors which are ubiquitous on the Internet Provides contemporary information on the deficiencies in web skills of novice users as well as practical techniques for teaching such users',
        'industryIdentifiers': [
          {
            'type': 'ISBN_13',
            'identifier': '9781780631769'
          },
          {
            'type': 'ISBN_10',
            'identifier': '1780631766'
          }
        ],
        'readingModes': {
          'text': false,
          'image': true
        },
        'pageCount': 324,
        'printType': 'BOOK',
        'categories': [
          'Computers'
        ],
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': false,
        'contentVersion': '1.2.1.0.preview.1',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=h56jAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=h56jAgAAQBAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=h56jAgAAQBAJ&printsec=frontcover&dq=search-terms&hl=&cd=1&source=gbs_api',
        'infoLink': 'https://play.google.com/store/books/details?id=h56jAgAAQBAJ&source=gbs_api',
        'canonicalVolumeLink': 'https://play.google.com/store/books/details?id=h56jAgAAQBAJ'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'FOR_SALE',
        'isEbook': true,
        'listPrice': {
          'amount': 5033.88,
          'currencyCode': 'INR'
        },
        'retailPrice': {
          'amount': 5033.88,
          'currencyCode': 'INR'
        },
        'buyLink': 'https://play.google.com/store/books/details?id=h56jAgAAQBAJ&rdid=book-h56jAgAAQBAJ&rdot=1&source=gbs_api',
        'offers': [
          {
            'finskyOfferType': 1,
            'listPrice': {
              'amountInMicros': 5033880000,
              'currencyCode': 'INR'
            },
            'retailPrice': {
              'amountInMicros': 5033880000,
              'currencyCode': 'INR'
            }
          }
        ]
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'PARTIAL',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED',
        'epub': {
          'isAvailable': false
        },
        'pdf': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/Effective_Information_Retrieval_from_the-sample-pdf.acsm?id=h56jAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=h56jAgAAQBAJ&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      },
      'searchInfo': {
        'textSnippet': 'Importantly, the book enables readers to develop strategies which will continue to be useful despite the rapidly-evolving state of the Internet and Internet technologies - it is not about technological tricks Enables readers to be aware of ...'
      }
    },
    {
      'kind': 'books#volume',
      'id': '_3qBmwzKKf4C',
      'etag': 'IjFjCf2mGp0',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/_3qBmwzKKf4C',
      'volumeInfo': {
        'title': 'Keyword Basics',
        'publisher': 'Wordtracker',
        'readingModes': {
          'text': true,
          'image': true
        },
        'pageCount': 25,
        'printType': 'BOOK',
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': false,
        'contentVersion': '0.1.2.0.preview.3',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=_3qBmwzKKf4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=_3qBmwzKKf4C&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=_3qBmwzKKf4C&printsec=frontcover&dq=search-terms&hl=&cd=2&source=gbs_api',
        'infoLink': 'http://books.google.co.in/books?id=_3qBmwzKKf4C&dq=search-terms&hl=&source=gbs_api',
        'canonicalVolumeLink': 'https://books.google.com/books/about/Keyword_Basics.html?hl=&id=_3qBmwzKKf4C'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'NOT_FOR_SALE',
        'isEbook': false
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'ALL_PAGES',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED',
        'epub': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/Keyword_Basics-sample-epub.acsm?id=_3qBmwzKKf4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'pdf': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/Keyword_Basics-sample-pdf.acsm?id=_3qBmwzKKf4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=_3qBmwzKKf4C&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      }
    },
    {
      'kind': 'books#volume',
      'id': 'HXIz79U7TNQC',
      'etag': '+aLAvoV3jFQ',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/HXIz79U7TNQC',
      'volumeInfo': {
        'title': 'Google Power Search',
        'subtitle': 'The Essential Guide to Finding Anything Online with Google',
        'authors': [
          'Stephan Spencer'
        ],
        'publisher': '"O\'Reilly Media, Inc."',
        'publishedDate': '2011-07-16',
        'description': 'Behind Google\'s deceptively simple interface is immense power for both market and competitive research—if you know how to use it well. Sure, basic searches are easy, but complex searches require specialized skills. This concise book takes you through the full range of Google\'s powerful search-refinement features, so you can quickly find the specific information you need. Learn techniques ranging from simple Boolean logic to URL parameters and other advanced tools, and see how they\'re applied to real-world market research examples. Incorporate advanced search operators such as filetype:, intitle:, daterange:, and others into your queries Use Google filtering tools, including Search Within Results, Similar Pages, and SafeSearch, among others Explore the breadth of Google through auxiliary search services like Google News, Google Books, Google Blog Search, and Google Scholar Acquire advanced Google skills that result in more effective search engine optimization (SEO)',
        'industryIdentifiers': [
          {
            'type': 'ISBN_13',
            'identifier': '9781449312992'
          },
          {
            'type': 'ISBN_10',
            'identifier': '1449312993'
          }
        ],
        'readingModes': {
          'text': true,
          'image': true
        },
        'pageCount': 74,
        'printType': 'BOOK',
        'categories': [
          'Computers'
        ],
        'averageRating': 5,
        'ratingsCount': 2,
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': true,
        'contentVersion': '2.8.6.0.preview.3',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=HXIz79U7TNQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=HXIz79U7TNQC&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=HXIz79U7TNQC&printsec=frontcover&dq=search-terms&hl=&cd=3&source=gbs_api',
        'infoLink': 'https://play.google.com/store/books/details?id=HXIz79U7TNQC&source=gbs_api',
        'canonicalVolumeLink': 'https://play.google.com/store/books/details?id=HXIz79U7TNQC'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'FOR_SALE',
        'isEbook': true,
        'listPrice': {
          'amount': 660.8,
          'currencyCode': 'INR'
        },
        'retailPrice': {
          'amount': 330.4,
          'currencyCode': 'INR'
        },
        'buyLink': 'https://play.google.com/store/books/details?id=HXIz79U7TNQC&rdid=book-HXIz79U7TNQC&rdot=1&source=gbs_api',
        'offers': [
          {
            'finskyOfferType': 1,
            'listPrice': {
              'amountInMicros': 660800000,
              'currencyCode': 'INR'
            },
            'retailPrice': {
              'amountInMicros': 330400000,
              'currencyCode': 'INR'
            }
          }
        ]
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'PARTIAL',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED',
        'epub': {
          'isAvailable': true
        },
        'pdf': {
          'isAvailable': true
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=HXIz79U7TNQC&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      },
      'searchInfo': {
        'textSnippet': 'Sure, basic searches are easy, but complex searches require specialized skills. This concise book takes you through the full range of Google&#39;s powerful search-refinement features, so you can quickly find the specific information you need.'
      }
    },
    {
      'kind': 'books#volume',
      'id': 'frL0EpijeEMC',
      'etag': 'O2ZeZYwuwso',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/frL0EpijeEMC',
      'volumeInfo': {
        'title': 'Web Search: Public Searching of the Web',
        'authors': [
          'Amanda Spink',
          'Bernard J. Jansen'
        ],
        'publisher': 'Springer Science & Business Media',
        'publishedDate': '2006-02-21',
        'description': 'This book brings together results from the Web search studies we conducted from 1997 through 2004. The aim of our studies has been twofold: to examine how the public at large searches the Web and to highlight trends in public Web searching. The eight-year period from 1997 to 2004 saw the beginnings and maturity of public Web searching. Commercial Web search engines have come and gone, or endured, through the fall of the dot.com companies. We saw the rise and, in some cases, the demise of several high profile, publicly available Web search engines. The study of the Web search is an exciting and important area of interdisciplinary research. Our book provides a valuable insight into the growth and development of human interaction with Web search engines. In this book, our focus is on the human aspect of the interaction between user and Web search engine. We do not investigate the Web search engines themselves or their constantly changing interfaces, algorithms and features. We focus on exploring the cognitive and user aspects of public Web searching in the aggregate. We use a variety of quantitative and qualitative methods within the overall methodology known as transaction log analysis.',
        'industryIdentifiers': [
          {
            'type': 'ISBN_13',
            'identifier': '9781402022692'
          },
          {
            'type': 'ISBN_10',
            'identifier': '1402022697'
          }
        ],
        'readingModes': {
          'text': false,
          'image': true
        },
        'pageCount': 199,
        'printType': 'BOOK',
        'categories': [
          'Computers'
        ],
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': false,
        'contentVersion': 'preview-1.0.0',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=frL0EpijeEMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=frL0EpijeEMC&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=frL0EpijeEMC&printsec=frontcover&dq=search-terms&hl=&cd=4&source=gbs_api',
        'infoLink': 'https://play.google.com/store/books/details?id=frL0EpijeEMC&source=gbs_api',
        'canonicalVolumeLink': 'https://play.google.com/store/books/details?id=frL0EpijeEMC'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'FOR_SALE',
        'isEbook': true,
        'listPrice': {
          'amount': 8401.6,
          'currencyCode': 'INR'
        },
        'retailPrice': {
          'amount': 8401.6,
          'currencyCode': 'INR'
        },
        'buyLink': 'https://play.google.com/store/books/details?id=frL0EpijeEMC&rdid=book-frL0EpijeEMC&rdot=1&source=gbs_api',
        'offers': [
          {
            'finskyOfferType': 1,
            'listPrice': {
              'amountInMicros': 8401600000,
              'currencyCode': 'INR'
            },
            'retailPrice': {
              'amountInMicros': 8401600000,
              'currencyCode': 'INR'
            }
          }
        ]
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'PARTIAL',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED',
        'epub': {
          'isAvailable': false
        },
        'pdf': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/Web_Search_Public_Searching_of_the_Web-sample-pdf.acsm?id=frL0EpijeEMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=frL0EpijeEMC&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      },
      'searchInfo': {
        'textSnippet': 'This book brings together results from the Web search studies we conducted from 1997 through 2004.'
      }
    },
    {
      'kind': 'books#volume',
      'id': 'Y7JQD8Ihox4C',
      'etag': 'Wudu+51UecM',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/Y7JQD8Ihox4C',
      'volumeInfo': {
        'title': 'Search Engine Optimization For Dummies',
        'authors': [
          'Peter Kent'
        ],
        'publisher': 'John Wiley & Sons',
        'publishedDate': '2012-07-03',
        'description': 'Increase your online ranking with this beginner guide to SEO! Search engine optimization (SEO) is an integral part of getting a site to rank high in the various search engines in order to attract potential customers. With this new edition of a bestseller, you?ll learn the ins and outs and best practices of successful SEO in order to make your website content more search-engine friendly so that it ranks higher among search engines and draws high-volume traffic. Covers search engine basics to help you get started Introduces new coverage on content marketing and reuse, new tracking tools, platform management, and reputation management Details ways to build search-engine friendly sites, register your site with directories and indexes, and use analysis tools to track results Explains how to use link popularity in order to boost rankings Zeroes in on advertising your site by using pay-per-click options Search Engine Optimization For Dummies, 5th Edition is the fun and friendly place to start learning how to move your site to the top of the rankings.',
        'industryIdentifiers': [
          {
            'type': 'ISBN_13',
            'identifier': '9781118396124'
          },
          {
            'type': 'ISBN_10',
            'identifier': '111839612X'
          }
        ],
        'readingModes': {
          'text': true,
          'image': true
        },
        'pageCount': 486,
        'printType': 'BOOK',
        'categories': [
          'Computers'
        ],
        'averageRating': 5,
        'ratingsCount': 1,
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': true,
        'contentVersion': '1.4.4.0.preview.3',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=Y7JQD8Ihox4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=Y7JQD8Ihox4C&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=Y7JQD8Ihox4C&printsec=frontcover&dq=search-terms&hl=&cd=5&source=gbs_api',
        'infoLink': 'http://books.google.co.in/books?id=Y7JQD8Ihox4C&dq=search-terms&hl=&source=gbs_api',
        'canonicalVolumeLink': 'https://books.google.com/books/about/Search_Engine_Optimization_For_Dummies.html?hl=&id=Y7JQD8Ihox4C'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'NOT_FOR_SALE',
        'isEbook': false
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'PARTIAL',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED',
        'epub': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/Search_Engine_Optimization_For_Dummies-sample-epub.acsm?id=Y7JQD8Ihox4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'pdf': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/Search_Engine_Optimization_For_Dummies-sample-pdf.acsm?id=Y7JQD8Ihox4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=Y7JQD8Ihox4C&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      },
      'searchInfo': {
        'textSnippet': 'Increase your online ranking with this beginner guide to SEO!'
      }
    },
    {
      'kind': 'books#volume',
      'id': 'SNAjMMp3H5UC',
      'etag': 'o+Ceuk9mf64',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/SNAjMMp3H5UC',
      'volumeInfo': {
        'title': 'Keyword Intelligence',
        'subtitle': 'Keyword Research for Search, Social, and Beyond',
        'authors': [
          'Ron Jones'
        ],
        'publisher': 'John Wiley & Sons',
        'publishedDate': '2011-10-19',
        'description': 'A unique book on the art and science of keyword research Keyword research can make or break a marketing campaign, an optimization strategy, and pay-per-click ad campaigns. Written by a keyword research expert, this essential resource drills home the importance of targeting the right keywords or phrases in order to get traffic from search engines and social media channels. Author Ron Jones imparts his wisdom and experience for determining which keywords will work based on a searcher\'s intent and he shows you how to research social, mobile, and video marketing tools that can ultimately become the foundation of a marketing campaign. Boasts detailed how-to information from one of the world\'s leading keyword research experts Helps you learn how to craft a successful keyword campaign and capture a coveted spot on the first page of a results page Pares down the essential information you need to know to use available tools to get keyword suggestions, forecast web site traffic, perform competitive research, and analyze results Walks you through how to best apply keywords to SEO and PPC campaigns as well as gain visibility with mobile marketing and integrate with traditional marketing efforts Features case studies, examples, tutorials, tips, and previously undocumented techniques No matter your level of experience working with keywords, Keyword Intelligence is the ultimate guide for learning how to best conduct keyword research and craft winning marketing campaigns.',
        'industryIdentifiers': [
          {
            'type': 'ISBN_13',
            'identifier': '9781118216910'
          },
          {
            'type': 'ISBN_10',
            'identifier': '1118216911'
          }
        ],
        'readingModes': {
          'text': true,
          'image': true
        },
        'pageCount': 447,
        'printType': 'BOOK',
        'categories': [
          'Business & Economics'
        ],
        'averageRating': 5,
        'ratingsCount': 1,
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': false,
        'contentVersion': '1.7.6.0.preview.3',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=SNAjMMp3H5UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=SNAjMMp3H5UC&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=SNAjMMp3H5UC&printsec=frontcover&dq=search-terms&hl=&cd=6&source=gbs_api',
        'infoLink': 'http://books.google.co.in/books?id=SNAjMMp3H5UC&dq=search-terms&hl=&source=gbs_api',
        'canonicalVolumeLink': 'https://books.google.com/books/about/Keyword_Intelligence.html?hl=&id=SNAjMMp3H5UC'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'NOT_FOR_SALE',
        'isEbook': false
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'PARTIAL',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED',
        'epub': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/Keyword_Intelligence-sample-epub.acsm?id=SNAjMMp3H5UC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'pdf': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/Keyword_Intelligence-sample-pdf.acsm?id=SNAjMMp3H5UC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=SNAjMMp3H5UC&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      },
      'searchInfo': {
        'textSnippet': 'This unique, detailed guide to every aspect of keyword research also features case studies, examples, tutorials, tips, and previously undocumented techniques drawn from renowned keyword research expert Ron Jones&#39;s extensive professional ...'
      }
    },
    {
      'kind': 'books#volume',
      'id': 'EVePnEaV368C',
      'etag': 'HD2erZ0VDsg',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/EVePnEaV368C',
      'volumeInfo': {
        'title': 'Using Google Advanced Search',
        'authors': [
          'Michael Miller'
        ],
        'publisher': 'Que Publishing',
        'publishedDate': '2011-11-18',
        'description': 'After completing this tutorial you will be able to use multiple search terms and other advanced features in "Google." This flash tutorial requires a screen resolution of 1024 x 768 or higher.',
        'industryIdentifiers': [
          {
            'type': 'ISBN_13',
            'identifier': '9780789743657'
          },
          {
            'type': 'ISBN_10',
            'identifier': '0789743655'
          }
        ],
        'readingModes': {
          'text': false,
          'image': true
        },
        'pageCount': 205,
        'printType': 'BOOK',
        'categories': [
          'Google'
        ],
        'averageRating': 4,
        'ratingsCount': 2,
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': false,
        'contentVersion': 'preview-1.0.0',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=EVePnEaV368C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=EVePnEaV368C&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=EVePnEaV368C&printsec=frontcover&dq=search-terms&hl=&cd=7&source=gbs_api',
        'infoLink': 'http://books.google.co.in/books?id=EVePnEaV368C&dq=search-terms&hl=&source=gbs_api',
        'canonicalVolumeLink': 'https://books.google.com/books/about/Using_Google_Advanced_Search.html?hl=&id=EVePnEaV368C'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'NOT_FOR_SALE',
        'isEbook': false
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'PARTIAL',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED_FOR_ACCESSIBILITY',
        'epub': {
          'isAvailable': false
        },
        'pdf': {
          'isAvailable': false
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=EVePnEaV368C&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      },
      'searchInfo': {
        'textSnippet': 'After completing this tutorial you will be able to use multiple search terms and other advanced features in &quot;Google.&quot; This flash tutorial requires a screen resolution of 1024 x 768 or higher.'
      }
    },
    {
      'kind': 'books#volume',
      'id': 'p7mHEAAAQBAJ',
      'etag': 'qylue30C8w0',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/p7mHEAAAQBAJ',
      'volumeInfo': {
        'title': 'The Joy of Search',
        'subtitle': 'A Google Insider\'s Guide to Going Beyond the Basics',
        'authors': [
          'Daniel M. Russell'
        ],
        'publisher': 'MIT Press',
        'publishedDate': '2023-06-06',
        'description': 'How to be a great online searcher, demonstrated with step-by-step searches for answers to a series of intriguing questions (for example, “Is that plant poisonous?”). We all know how to look up something online by typing words into a search engine. We do this so often that we have made the most famous search engine a verb: we Google it—“Japan population” or “Nobel Peace Prize” or “poison ivy” or whatever we want to know. But knowing how to Google something doesn\'t make us search experts; there\'s much more we can do to access the massive collective knowledge available online. In The Joy of Search, Daniel Russell shows us how to be great online researchers. We don\'t have to be computer geeks or a scholar searching out obscure facts; we just need to know some basic methods. Russell demonstrates these methods with step-by-step searches for answers to a series of intriguing questions—from “what is the wrong side of a towel?” to “what is the most likely way you will die?” Along the way, readers will discover essential tools for effective online searches—and learn some fascinating facts and interesting stories. Russell explains how to frame search queries so they will yield information and describes the best ways to use such resources as Google Earth, Google Scholar, Wikipedia, and Wikimedia. He shows when to put search terms in double quotes, how to use the operator (*), why metadata is important, and how to triangulate information from multiple sources. By the end of this engaging journey of discovering, readers will have the definitive answer to why the best online searches involve more than typing a few words into Google.',
        'industryIdentifiers': [
          {
            'type': 'ISBN_13',
            'identifier': '9780262546072'
          },
          {
            'type': 'ISBN_10',
            'identifier': '0262546078'
          }
        ],
        'readingModes': {
          'text': false,
          'image': true
        },
        'pageCount': 337,
        'printType': 'BOOK',
        'categories': [
          'Computers'
        ],
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': false,
        'contentVersion': '1.1.1.0.preview.1',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=p7mHEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=p7mHEAAAQBAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=p7mHEAAAQBAJ&printsec=frontcover&dq=search-terms&hl=&cd=8&source=gbs_api',
        'infoLink': 'http://books.google.co.in/books?id=p7mHEAAAQBAJ&dq=search-terms&hl=&source=gbs_api',
        'canonicalVolumeLink': 'https://books.google.com/books/about/The_Joy_of_Search.html?hl=&id=p7mHEAAAQBAJ'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'NOT_FOR_SALE',
        'isEbook': false
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'PARTIAL',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED',
        'epub': {
          'isAvailable': false
        },
        'pdf': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/The_Joy_of_Search-sample-pdf.acsm?id=p7mHEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=p7mHEAAAQBAJ&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      },
      'searchInfo': {
        'textSnippet': 'But knowing how to Google something doesn&#39;t make us search experts; there&#39;s much more we can do to access the massive collective knowledge available online. In The Joy of Search, Daniel Russell shows us how to be great online researchers.'
      }
    },
    {
      'kind': 'books#volume',
      'id': 'VfGcDwAAQBAJ',
      'etag': '0sivyhd7v+A',
      'selfLink': 'https://www.googleapis.com/books/v1/volumes/VfGcDwAAQBAJ',
      'volumeInfo': {
        'title': 'How to Get to the Top of Google Search',
        'subtitle': 'A Practical SEO Guide',
        'authors': [
          'Richard Conway'
        ],
        'publisher': 'Penguin Random House New Zealand Limited',
        'publishedDate': '2019-03-05',
        'description': 'Anyone trying to sell anything wants potential customers to be able to find them straight away when searching online. This book tells them how. It has been written by a professional search engine consultant. Richard Conway started his company, Pure SEO, in 2009 with just $200 to spend on a single web page. From there, mostly using digital marketing, he has expanded the business to four offices in New Zealand and Australia. Pure SEO has been listed by Deloitte in the fastest-growing 500 tech companies in the Asia Pacific region for the past five years. This practical guide cuts through the mis-information and sets the record straight on what actions you need to take, so searchers will find your product quickly and easily. It covers keywords, website content and structure, mobile search and optimisation, loading speed of your website and how that affects searches, planning content to make it easily searchable, tracking tools and much much more. With Australasian-focused statistics and insights, as well as advice about how these two markets differ, the book is an authoritative and accessible \'how to\' resource. Case studies and Q&A sections provide real-life dos and don\'ts. As well as actionable advice and \'red flags\' to avoid, the book also looks ahead to consider the future of search marketing.',
        'industryIdentifiers': [
          {
            'type': 'ISBN_13',
            'identifier': '9780143773542'
          },
          {
            'type': 'ISBN_10',
            'identifier': '0143773542'
          }
        ],
        'readingModes': {
          'text': true,
          'image': true
        },
        'pageCount': 286,
        'printType': 'BOOK',
        'categories': [
          'Computers'
        ],
        'maturityRating': 'NOT_MATURE',
        'allowAnonLogging': true,
        'contentVersion': '1.1.1.0.preview.3',
        'panelizationSummary': {
          'containsEpubBubbles': false,
          'containsImageBubbles': false
        },
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=VfGcDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=VfGcDwAAQBAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api'
        },
        'language': 'en',
        'previewLink': 'http://books.google.co.in/books?id=VfGcDwAAQBAJ&printsec=frontcover&dq=search-terms&hl=&cd=9&source=gbs_api',
        'infoLink': 'http://books.google.co.in/books?id=VfGcDwAAQBAJ&dq=search-terms&hl=&source=gbs_api',
        'canonicalVolumeLink': 'https://books.google.com/books/about/How_to_Get_to_the_Top_of_Google_Search.html?hl=&id=VfGcDwAAQBAJ'
      },
      'saleInfo': {
        'country': 'IN',
        'saleability': 'NOT_FOR_SALE',
        'isEbook': false
      },
      'accessInfo': {
        'country': 'IN',
        'viewability': 'PARTIAL',
        'embeddable': true,
        'publicDomain': false,
        'textToSpeechPermission': 'ALLOWED',
        'epub': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/How_to_Get_to_the_Top_of_Google_Search-sample-epub.acsm?id=VfGcDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'pdf': {
          'isAvailable': true,
          'acsTokenLink': 'http://books.google.co.in/books/download/How_to_Get_to_the_Top_of_Google_Search-sample-pdf.acsm?id=VfGcDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
        },
        'webReaderLink': 'http://play.google.com/books/reader?id=VfGcDwAAQBAJ&hl=&source=gbs_api',
        'accessViewStatus': 'SAMPLE',
        'quoteSharingAllowed': false
      },
      'searchInfo': {
        'textSnippet': 'This book tells them how. It has been written by a professional search engine consultant. Richard Conway started his company, Pure SEO, in 2009 with just $200 to spend on a single web page.'
      }
    }
  ];
}
