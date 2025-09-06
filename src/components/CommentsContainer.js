import React from 'react'

const CommentsContainer = () => {

    const commentsData = [
        {
            name: 'Pratibha Kaushik',
            comment: 'Lorem ipsum dolor sit amet',
            replies: [
                {
                    name: 'Pratibha Kaushik',
                    comment: 'Lorem ipsum dolor sit amet',
                    replies: [
                        {
                            name: 'Rishika Kaushik',
                            comment: 'Nice vedio',
                            replies: [
                                {
                                    name: 'Pratibha Kaushik',
                                    comment: 'Lorem ipsum dolor sit amet',
                                    replies: [{
                                        name: 'Rishika Kaushik',
                                        comment: 'Nice vedio',
                                        replies: []
                                    },
                                    {
                                        name: 'Rishika Kaushik',
                                        comment: 'Nice vedio',
                                        replies: []
                                    }]
                                },
                                {
                                    name: 'Pratibha Kaushik',
                                    comment: 'Lorem ipsum dolor sit amet',
                                    replies: [
                                        {
                                            name: 'Rishika Kaushik',
                                            comment: 'Nice vedio',
                                            replies: [
                                                {
                                                    name: 'Pratibha Kaushik',
                                                    comment: 'Lorem ipsum dolor sit amet',
                                                    replies: []
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    name: 'Pratibha Kaushik',
                    comment: 'Lorem ipsum dolor sit amet',
                    replies: [
                        {
                            name: 'Rishika Kaushik',
                            comment: 'Nice vedio',
                            replies: [
                                {
                                    name: 'Pratibha Kaushik',
                                    comment: 'Lorem ipsum dolor sit amet',
                                    replies: [
                                        {
                                            name: 'Rishika Kaushik',
                                            comment: 'Nice vedio',
                                            replies: [
                                                {
                                                    name: 'Pratibha Kaushik',
                                                    comment: 'Lorem ipsum dolor sit amet',
                                                    replies: []
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name: 'Rishika Kaushik',
            comment: 'Nice vedio',
            replies: [
                {
                    name: 'Pratibha Kaushik',
                    comment: 'Lorem ipsum dolor sit amet',
                    replies: []
                },
                {
                    name: 'Pratibha Kaushik',
                    comment: 'Lorem ipsum dolor sit amet',
                    replies: []
                }
            ]
        },
        {
            name: 'Sanjay Shrivas',
            comment: 'Nice vedio',
            replies: [
                {
                    name: 'Pratibha Kaushik',
                    comment: 'Lorem ipsum dolor sit amet',
                    replies: []
                }
            ]
        },
        {
            name: 'Kratika Kaushik',
            comment: 'Lorem ipsum dolor sit amet',
            replies: [
                {
                    name: 'Pratibha Kaushik',
                    comment: 'Lorem ipsum dolor sit amet',
                    replies: []
                }
            ]
        },
    ]

    const Comment = ({ data }) => {
        return (
            <div className='p-2 flex shadow-sm bg-gray-100 rounded-lg my-2'>
                <img
                    className='h-10'
                    alt='user-icon'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
                <div>
                    <p className='px-2 font-medium'>{data?.name}</p>
                    <p className='px-2'>
                        {data?.comment}
                    </p>
                </div>
            </div>

        )
    }

    const CommentList = ({ data }) => {
        return data.map((comment, index) => {
            return <div key={index}>
                <Comment data={comment} />
                <div className='px-6 border border-l-gray-500'>
                    <CommentList data={comment?.replies} />
                </div>

            </div>
        })
    }

    return (
        <div className='m-1 p-2'>
            <h1 className='text-xl font-bold'>Comments:</h1>
            <CommentList data={commentsData} />
        </div>
    )
}

export default CommentsContainer