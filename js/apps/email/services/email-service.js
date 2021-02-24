import { storageService } from '../../../site-services/async-storage-service.js'

export const emailService = {
    query,
    getById
}

const EMAILS_KEY = 'emails'


// { folder: '', subject: '', from: '', to: '', body: '', isRead: false, sentAt: , id: randomID+sentAt}
/// sent emails will always be read- true unless manually changed
/// sent emails will always be sent from 'me'
let emailDB = [
    {
        folder: 'inbox', subject: 'How are you?',
        from: 'Gali', to: 'me',
        body: 'hey, just checking up how the sprint work is going. :)',
        isRead: false, sentAt: 1614193632740,
        id: '15511339305941234567'
    },
    {
        folder: 'inbox',
        subject: 'Almog, please add me to your LinkedIn network‏',
        from: 'LinkedIn', to: 'me',
        body: `Hi Almog, I'd like to join your LinkedIn network.`,
        isRead: false, sentAt: 1611515895000,
        id: '15511339308001234567'
    },
    {
        folder: 'inbox', subject: 'Your purchase from Etsy has been shipped!',
        from: 'Etsy', to: 'me', body: `Hello, we're messaging to let you know order 204875645 has been shipped. expect to receive the item within 2 weeks. Etsy team`,
        isRead: true, sentAt: 1597519698000,
        id: '15511339307001234567'
    },
    {
        folder: 'inbox', subject: 'Have you logged to Facebook recently?',
        from: 'Facebook', to: 'me',
        body: 'We noticed a new log in to your account on 23/02/2021. was that you? if not, change your password and contact our customer support for help with security.',
        isRead: true, sentAt: 1551133930500,
        id: '115511339305001234567'
    },
    {
        folder: 'sent',
        subject: 'Hey check out the new update‏',
        from: 'me', to: 'Gali',
        body: `Hey I pushed a new commit to git, can you do pull and check it out?`,
        isRead: true, sentAt: 1551133930800,
        id: '15511339308031234567'
    }
]

function query() {
    return storageService.query(EMAILS_KEY)
        .then(emails => {
            if (!emails.length) {
                emails = emailDB;
                storageService.postMany(EMAILS_KEY, emails);
            }
            return emails;
        }
        );
}

function getById(id) {
    return storageService.get(EMAILS_KEY, id)
}