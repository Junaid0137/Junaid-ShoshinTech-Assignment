import React from 'react'
import Announcement from './Announcement'
import { DatePicker } from './Calender'

function Announcements({ name, dataType }: { name: string, dataType: string }) {
    const AnnouncementData = [
        {
            title: 'Outing schedule for every departement',
            time: '5 minutes ago'
        },
        {
            title: 'Meeting HR Department',
            time: 'Yesterday, 12:30 PM'
        },
        {
            title: 'IT Department need two more talents for UX/UI Designer position',
            time: 'Yesterday, 9:15 AM'
        },
        {
            title: 'Outing schedule for every departement',
            time: '5 minutes ago'
        },
        {
            title: 'Meeting HR Department',
            time: 'Yesterday, 12:30 PM'
        },
        {
            title: 'IT Department need two more talents for UX/UI Designer position',
            time: 'Yesterday, 9:15 AM'
        },
    ]
    const UpcomingData = {
        Priority: [
            {
                title: 'Review candidate applications',
                time: 'Today - 11.30 AM'
            },
        ],
        Other: [
            {
                title: 'Interview with candidates',
                time: 'Today - 10.30 AM'
            },
            {
                title: 'Short meeting with product designer from IT Departement',
                time: 'Today - 09.15 AM'
            },
            {
                title: 'Review candidate applications',
                time: 'Today - 11.30 AM'
            },
            {
                title: 'Interview with candidates',
                time: 'Today - 10.30 AM'
            },
            {
                title: 'Short meeting with product designer from IT Departement',
                time: 'Today - 09.15 AM'
            },
        ]
    }
    return (
        <div>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='font-semibold text-md md:text-xl ml-2'>{name}</h1>
                <DatePicker />
            </div>
            {dataType === 'announcement' && (
                <div className='grid grid-cols-1 space-y-3 mt-5 max-h-56 overflow-y-scroll scrollbar'>
                    {AnnouncementData.map((item, i) => (
                        <Announcement key={i} title={item.title} time={item.time} />
                    ))}
                </div>
            )}
            {dataType === 'upcoming' && (
                <div className='p-2'>
                    <div>
                        <h1>Priority</h1>
                        <div className='grid grid-cols-1 space-y-3 mt-5 max-h-[305px] overflow-y-scroll scrollbar'>
                            {UpcomingData.Priority.map((item, i) => (
                                <Announcement key={i} title={item.title} time={item.time} />
                            ))}
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h1>Other</h1>
                        <div className='grid grid-cols-1 space-y-3 mt-5 max-h-40 overflow-y-scroll scrollbar'>
                            {UpcomingData.Other.map((item, i) => (
                                <Announcement key={i} title={item.title} time={item.time} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Announcements
