# Blood Donor & Doctor Service App

Live Link https://healtappfront.vercel.app/

# SRS (Software Requirement Specification)

## Client's Requirements

Create a website. A user can search for a blood donor from that website. After finding the user can message him. The doctor can see the patient through the website. There will be 5 roles, user, blood donor, doctor, manager, and admin.

## Functional Requirements

Entity

- Admin
- user
- blood donor
- doctor
- manager

- **Common Functionality (User, donor, doctor, manager, admin)**

  - Everyone can log in and log out
  - Everyone can manage and update their profiles.
  - Everyone can reset and forget new passwords.
  - Everyone can see all the chat lists.

  **Social Media**

  - Everyone Can Post, and share their social media.
  - Everyone can Like and Comment on any post.
  - Everyone can update posts, profiles, etc

  - **User Roles**
  - Users can find blood donors and message them. (Use [sociket.io](http://sociket.io) for messaging)
  - After finding the donor, the user will request him to donate blood.
    - 3 Types Status Are there request
      - Pending (by default)
      - Accepted
      - completed
      - cancel
  - When the Donner Accepted Request then notify this message.
  - After accepting the donor request user can set the completed status.
  - Users can review the blood donors after setting the completed status.
  - The user can see the requests sent to the blood donor in the dashboard. And if the user wants to cancel the request or delete it.
  - If the user wants, he can find the donor with the specific donor ID. Or you can search for blood donors according to district and blood group. (Optional )
  - Users cannot search and message blocked donors.
  - Users can report admin the blood donor if they want. (optional )
  - Users can search needed any specific dactor.
  - The user has to pay for the doctor's appointment. Then book the slot according to the date.
  - Users can use the promo code if they want.
  - Users can see the payment details in the dashboard.
  - Users can see the booking appointment in the dashboard.
  - Users can see all chatting lists.
  - There will be a button for booking appointments. The button will be enabled at the specified time on the booked appointment date. (every time disabled)
  - The user can talk to the doctor on Google Meet by clicking the Enable button.
  - Users can give reviews after taking the service of the doctor.

- **Blood Donor Roles**
  - If you want to donate blood, you have to register with us and become a blood donor Account.
  - Blood donors can share blood anywhere in Bangladesh or can share it in specific places.
  - Blood Donor will see all user requests on the dashboard.
  - when the user requests blood donate show a notification message.
  - The blood donor can accept or delete this request.
  - If the blood donor donates more than 10 blood, the donor can request his account verification from us. (Then verify check mark should be shown on his profile.)
  - blood donners can see the list of users who have donated blood on its dashboard.
  - Blood donors will get 2 coin rewards for donating blood.
  - Blood donors can block the user if they want.
  - Blood Donor can also delete user reviews.
  - Blood donors can book doctor appointments with 500 coins.
  - blood donors can see the payment details in the dashboard.
  - blood donner can see the booking appointment in the dashboard.
  - There will be a button for booking appointments. The button will be enabled at the specified time on the booked appointment date. (every time disabled)
  - The blood donner can talk to the doctor on Google Meet by clicking the Enable button.
  - blood donner can give a review after taking the service of a doctor.
- **Doctor Roles**
  - Apply on the website by filling out the form to provide the doctor's services.
  - doctor can create only one gig/service that is related to the service he provides.[gig request there admin]
    - Pending (by-default status )
    - Accept
    - Cancel
  - doctor can see the present list of daily bookings on the dashboard.
  - A doctor can see his gig dashboard. And he can see the total sum of how many people have taken the service.
  - The doctor will enable the button at his scheduled time.
  - A doctor can delete his gig review if he wants.
  - A doctor can generate a promo code and give a discount if he wants.
  - If he gives the promo code he can show it at his gig.
  - Doctors can see the balance.
  - The doctor will request the admin to withdraw his balance.
  - the doctor can request a verification mark in her profile from admin.

  - **Manager Role**

    - The manager will accept the doctor's account.
    - the manager verifies donor and doctor accounts.
    - manager can see the user/blood donner report list. (optional)
    - The manager will accept the doctor's gig request.
    - The manager will see the list of all the present payment lists.
    - The manager will accept the withdrawal of the doctor's money.
    - Managers can see user, doctor, and blood donor accounts. (but not delete it)

  - **Admin Role**
    - admin can suspend users, blood donors, and doctor accounts.
    - admin can see the total review in her dashboard
    - admin can see the list of users
    - admin can see a list of blood donner
    - admin can see a list of Doctors
    - admin can see a list of managers
    - admin can create a new manager, blood doner, and doctor accounts.
    - admin can delete users, blood donors, doctors, and manager accounts.
    - admin call deletes social media posts usually.
