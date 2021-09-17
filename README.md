# WiredIn
WiredIn is a functional LinkedIn clone in which an user can create an account and profile and connect with other members. The user has the ability to create, edit and delete posts as well as edit all basic profile information. They may also view other memeber's profiles. 

### Live Site: [WiredIn](https://w-in.herokuapp.com/#/)

## Technologies Used
* React
* Redux
* Vanilla Javascript
* jQuery
* Ruby on Rails
* JBuilder
* PostgreSQL
* AWS S3


## Features
### User Authentication 
* Profile users can access their feed page in which they can create, edit and delete posts composed of text and images. 
* Profile users can upload an avatar picture that will render through all features which include an avatar. 

## Code Snippets
* Modals handling of forms on the site 
```javascript
function Modal({modal, closeModal, id}){
  
    if(!modal){
        return null
    }
    let component; 
    switch(modal.modal){
        case 'postForm':
            component = <PostFormContainer />
            break;
        case 'editForm':
            component = <EditFormContainer postId={modal.id}/>
            break;
        case 'editBasic':
            component = <EditBasicContainer profileId={modal.id}/>
            break;
        case 'createBasic':
            component = <CreateBasicContainer/>
            break;
        case 'addEducation':
            component = <AddEducationContainer/>
            break;
        case 'addExperience':
            component = <AddExperienceContainer/>
            break;
        case 'addAvatar':
            component = <AddAvatarContainer/>
            break;
        case 'editExperience':
            component = <EditExpContainer expId={modal.id}/>
            break;
        case 'editEducation':
            component = <EditEduContainer eduId={modal.id}/>
            break;
        default: 
            return null;

    }

```

* Handle file input through AWS storage 
```javascript
 handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
        this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ photoUrl: "", photoFile: null });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPost(formData)
            .then(() => this.props.closeModal())
    }
```
