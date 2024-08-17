import React from 'react';

export function HomePage() {
    return (
        <section className='homepage-container'>
            <div className='main-prev'>
                <div className='intro'>
                    <h1 >PlanIt brings all your tasks, teammates, and tools together</h1>
                    <p >Keep everything in the same place — even if your team isn’t.</p>
                    <form action="">
                        <input type="text"
                            placeholder='Email' />
                        <button>Sign up - it's free!</button>
                    </form>
                </div>
                <img className='conversation-img' src="/src/assets/imgs/TrelloUICollage.png" alt="" />
            </div>
        </section>
    );
}
