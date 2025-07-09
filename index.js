function genClasspect(){
    const random1 = Math.floor(Math.random() * 11);
    const random2 = Math.floor(Math.random() * 11);
    var other = document.getElementById("desc");
    var btn = document.getElementById("btn");
    let thing = "";
    let aspect = "";
switch (random1){
    case 0:
        thing = "WITCH";
        break;

    case 1:
        thing = "HEIR";
        break;

    case 2:
        thing = "MAGE";
        break;
    case 3:
        thing = "SEER";
        break;

    case 4:
        thing = "MAID";
        break;

    case 5:
        thing = "SYLPH";
        break;

    case 6:
        thing = "THIEF";
        break;
    
    case 7:
        thing = "ROGUE";
        break;
    
    case 8:
        thing = "PRINCE";
        break;

    case 9:
        thing = "BARD";
        break;
    
    case 10:
        thing = "KNIGHT";
       break;
        
    case 11:
        thing = "PAGE";
        break;

    default:
        thing = "NULL";
        break;
}
switch (random2){
    case 0:
        aspect = "BREATH";
        break;

    case 1:
        aspect = "BLOOD";
        break;

    case 2:
        aspect = "TIME";
        break;
    case 3:
        aspect = "SPACE";
        break;

    case 4:
        aspect = "LIGHT";
        break;

    case 5:
        aspect = "VOID";
        break;

    case 6:
        aspect = "MIND";
        break;
    
    case 7:
        aspect = "HEART";
        break;
    
    case 8:
        aspect = "HOPE";
        break;

    case 9:
        aspect = "RAGE";
        break;
    
    case 10:
        aspect = "LIFE";
       break;
        
    case 11:
        aspect = "DOOM";
        break;

    default:
        aspect = "NULL";
        break;
}

if (thing === "WITCH" && aspect === "BREATH") {
    other.innerHTML = "you are a witch of breath";
}
else if (thing === "WITCH" && aspect === "blood"){
    other.innerHTML = "you are a WITCH of blood";
}
else if (thing === "WITCH" && aspect === "TIME"){
    other.innerHTML = "you are a WITCH of time";
}
else if (thing === "WITCH" && aspect === "SPACE"){
    other.innerHTML = "you are a WITCH of space";
}
else if (thing === "WITCH" && aspect === "LIGHT"){
    other.innerHTML = "you are a WITCH of light";
}
else if (thing === "WITCH" && aspect === "VOID"){
    other.innerHTML = "you are a WITCH of void";
}
else if (thing === "WITCH" && aspect === "MIND"){
    other.innerHTML = "you are a WITCH of mind";
}
else if (thing === "WITCH" && aspect === "HEART"){
    other.innerHTML = "you are a WITCH of heart";
}
else if (thing === "WITCH" && aspect === "RAGE"){
    other.innerHTML = "you are a WITCH of rage";
}
else if (thing === "WITCH" && aspect === "HOPE"){
    other.innerHTML = "you are a WITCH of hope";
}
else if (thing === "WITCH" && aspect === "DOOM"){
    other.innerHTML = "you are a WITCH of doom";
}
else if (thing === "WITCH" && aspect === "LIFE"){
    other.innerHTML = "you are a WITCH of life";
} 
else if (thing === "HEIR" && aspect === "BREATH") {
    other.innerHTML = "you are a HEIR of breath";
}
else if (thing === "HEIR" && aspect === "blood") {
    other.innerHTML = "you are a HEIR of blood";
}
else if (thing === "HEIR" && aspect === "TIME"){
    other.innerHTML = "you are a HEIR of time";
}
else if (thing === "HEIR" && aspect === "SPACE"){
    other.innerHTML = "you are a HEIR of space";
}
else if (thing === "HEIR" && aspect === "LIGHT"){
    other.innerHTML = "you are a HEIR of light";
}
else if (thing === "HEIR" && aspect === "VOID"){
    other.innerHTML = "you are a HEIR of void";
}
else if (thing === "HEIR" && aspect === "MIND"){
    other.innerHTML = "you are a HEIR of mind";
}
else if (thing === "HEIR" && aspect === "HEART"){
    other.innerHTML = "you are a HEIR of heart";
}
else if (thing === "HEIR" && aspect === "RAGE"){
    other.innerHTML = "you are a HEIR of rage";
}
else if (thing === "HEIR" && aspect === "HOPE"){
    other.innerHTML = "you are a HEIR of hope";
}
else if (thing === "HEIR" && aspect === "DOOM"){
    other.innerHTML = "you are a HEIR of doom";
}
else if (thing === "HEIR" && aspect === "LIFE"){
    other.innerHTML = "you are a HEIR of life";
} 
else if (thing === "MAGE" && aspect === "BREATH") {
    other.innerHTML = "you are a MAGE of breath";
}
else if (thing === "MAGE" && aspect === "blood") {
    other.innerHTML = "you are a MAGE of blood";
}
else if (thing === "MAGE" && aspect === "TIME"){
    other.innerHTML = "you are a MAGE of time";
}
else if (thing === "MAGE" && aspect === "SPACE"){
    other.innerHTML = "you are a MAGE of space";
}
else if (thing === "MAGE" && aspect === "LIGHT"){
    other.innerHTML = "you are a MAGE of light";
}
else if (thing === "MAGE" && aspect === "VOID"){
    other.innerHTML = "you are a MAGE of void";
}
else if (thing === "MAGE" && aspect === "MIND"){
    other.innerHTML = "you are a MAGE of mind";
}
else if (thing === "MAGE" && aspect === "HEART"){
    other.innerHTML = "you are a MAGE of heart";
}
else if (thing === "MAGE" && aspect === "RAGE"){
    other.innerHTML = "you are a MAGE of rage";
}
else if (thing === "MAGE" && aspect === "HOPE"){
    other.innerHTML = "you are a MAGE of hope";
}
else if (thing === "MAGE" && aspect === "DOOM"){
    other.innerHTML = "you are a MAGE of doom";
}
else if (thing === "MAGE" && aspect === "LIFE"){
    other.innerHTML = "you are a MAGE of life";
} 
else if (thing === "SEER" && aspect === "BREATH") {
    other.innerHTML = "you are a SEER of breath";
}
else if (thing === "SEER" && aspect === "blood") {
    other.innerHTML = "you are a SEER of blood";
}
else if (thing === "SEER" && aspect === "TIME"){
    other.innerHTML = "you are a SEER of time";
}
else if (thing === "SEER" && aspect === "SPACE"){
    other.innerHTML = "you are a SEER of space";
}
else if (thing === "SEER" && aspect === "LIGHT"){
    other.innerHTML = "you are a SEER of light";
}
else if (thing === "SEER" && aspect === "VOID"){
    other.innerHTML = "you are a SEER of void";
}
else if (thing === "SEER" && aspect === "MIND"){
    other.innerHTML = "you are a SEER of mind";
}
else if (thing === "SEER" && aspect === "HEART"){
    other.innerHTML = "you are a SEER of heart";
}
else if (thing === "SEER" && aspect === "RAGE"){
    other.innerHTML = "you are a SEER of rage";
}
else if (thing === "SEER" && aspect === "HOPE"){
    other.innerHTML = "you are a SEER of hope";
}
else if (thing === "SEER" && aspect === "DOOM"){
    other.innerHTML = "you are a SEER of doom";
}
else if (thing === "SEER" && aspect === "LIFE"){
    other.innerHTML = "you are a SEER of life";
} 
else if (thing === "MAID" && aspect === "BREATH") {
    other.innerHTML = "you are a MAID of breath";
}
else if (thing === "MAID" && aspect === "BLOOD") {
    other.innerHTML = "you are a MIAD of BLOOD";
}
else if (thing === "MAID" && aspect === "TIME"){
    other.innerHTML = "you are a MAID of time";
}
else if (thing === "MAID" && aspect === "SPACE"){
    other.innerHTML = "you are a MAID of space";
}
else if (thing === "MAID" && aspect === "LIGHT"){
    other.innerHTML = "you are a MAID of light";
}
else if (thing === "MAID" && aspect === "VOID"){
    other.innerHTML = "you are a MAID of void";
}
else if (thing === "MAID" && aspect === "MIND"){
    other.innerHTML = "you are a MAID of mind";
}
else if (thing === "MAID" && aspect === "HEART"){
    other.innerHTML = "you are a MAID of heart";
}
else if (thing === "MAID" && aspect === "RAGE"){
    other.innerHTML = "you are a MAID of rage";
}
else if (thing === "MAID" && aspect === "HOPE"){
    other.innerHTML = "you are a MAID of hope";
}
else if (thing === "MAID" && aspect === "DOOM"){
    other.innerHTML = "you are a MAID of doom";
}
else if (thing === "MAID" && aspect === "LIFE"){
    other.innerHTML = "you are a MAID of life";
} 
else if (thing === "SYLPH" && aspect === "BREATH") {
    other.innerHTML = "you are a SYLPH of breath";
}
else if (thing === "SYLPH" && aspect === "blood") {
    other.innerHTML = "you are a SYLPH of blood";
}
else if (thing === "SYLPH" && aspect === "TIME"){
    other.innerHTML = "you are a SYLPH of time";
}
else if (thing === "SYLPH" && aspect === "SPACE"){
    other.innerHTML = "you are a SYLPH of space";
}
else if (thing === "SYLPH" && aspect === "LIGHT"){
    other.innerHTML = "you are a SYLPH of light";
}
else if (thing === "SYLPH" && aspect === "VOID"){
    other.innerHTML = "you are a SYLPH of void";
}
else if (thing === "SYLPH" && aspect === "MIND"){
    other.innerHTML = "you are a SYLPH of mind";
}
else if (thing === "SYLPH" && aspect === "HEART"){
    other.innerHTML = "you are a SYLPH of heart";
}
else if (thing === "SYLPH" && aspect === "RAGE"){
    other.innerHTML = "you are a SYLPH of rage";
}
else if (thing === "SYLPH" && aspect === "HOPE"){
    other.innerHTML = "you are a SYLPH of hope";
}
else if (thing === "SYLPH" && aspect === "DOOM"){
    other.innerHTML = "you are a SYLPH of doom";
}
else if (thing === "SYLPH" && aspect === "LIFE"){
    other.innerHTML = "you are a SYLPH of life";
} 
else if (thing === "THIEF" && aspect === "BREATH") {
    other.innerHTML = "you are a THIEF of breath";
}
else if (thing === "THIEF" && aspect === "blood") {
    other.innerHTML = "you are a THIEF of blood";
}
else if (thing === "THIEF" && aspect === "TIME"){
    other.innerHTML = "you are a THIEF of time";
}
else if (thing === "THIEF" && aspect === "SPACE"){
    other.innerHTML = "you are a THIEF of space";
}
else if (thing === "THIEF" && aspect === "LIGHT"){
    other.innerHTML = "you are a THIEF of light";
}
else if (thing === "THIEF" && aspect === "VOID"){
    other.innerHTML = "you are a THIEF of void";
}
else if (thing === "THIEF" && aspect === "MIND"){
    other.innerHTML = "you are a THIEF of mind";
}
else if (thing === "THIEF" && aspect === "HEART"){
    other.innerHTML = "you are a THIEF of heart";
}
else if (thing === "THIEF" && aspect === "RAGE"){
    other.innerHTML = "you are a THIEF of rage";
}
else if (thing === "THIEF" && aspect === "HOPE"){
    other.innerHTML = "you are a THIEF of hope";
}
else if (thing === "THIEF" && aspect === "DOOM"){
    other.innerHTML = "you are a THIEF of doom";
}
else if (thing === "THIEF" && aspect === "LIFE"){
    other.innerHTML = "you are a THIEF of life";
} 
else if (thing === "ROGUE" && aspect === "BREATH") {
    other.innerHTML = "you are a ROGUE of breath";
}
else if (thing === "ROGUE" && aspect === "blood") {
    other.innerHTML = "you are a ROGUE of blood";
}
else if (thing === "ROGUE" && aspect === "TIME"){
    other.innerHTML = "you are a ROGUE of time";
}
else if (thing === "ROGUE" && aspect === "SPACE"){
    other.innerHTML = "you are a ROGUE of space";
}
else if (thing === "ROGUE" && aspect === "LIGHT"){
    other.innerHTML = "you are a ROGUE of light";
}
else if (thing === "ROGUE" && aspect === "VOID"){
    other.innerHTML = "you are a ROGUE of void";
}
else if (thing === "ROGUE" && aspect === "MIND"){
    other.innerHTML = "you are a ROGUE of mind";
}
else if (thing === "ROGUE" && aspect === "HEART"){
    other.innerHTML = "you are a ROGUE of heart";
}
else if (thing === "ROGUE" && aspect === "RAGE"){
    other.innerHTML = "you are a ROGUE of rage";
}
else if (thing === "ROGUE" && aspect === "HOPE"){
    other.innerHTML = "you are a ROGUE of hope";
}
else if (thing === "ROGUE" && aspect === "DOOM"){
    other.innerHTML = "you are a ROGUE of doom";
}
else if (thing === "ROGUE" && aspect === "LIFE"){
    other.innerHTML = "you are a ROGUE of life";
} 
else if (thing === "PRINCE" && aspect === "BREATH") {
    other.innerHTML = "you are a PRINCE of breath";
}
else if (thing === "PRINCE" && aspect === "blood") {
    other.innerHTML = "you are a PRINCE of blood";
}
else if (thing === "PRINCE" && aspect === "TIME"){
    other.innerHTML = "you are a PRINCE of time";
}
else if (thing === "PRINCE" && aspect === "SPACE"){
    other.innerHTML = "you are a PRINCE of space";
}
else if (thing === "PRINCE" && aspect === "LIGHT"){
    other.innerHTML = "you are a PRINCE of light";
}
else if (thing === "PRINCE" && aspect === "VOID"){
    other.innerHTML = "you are a PRINCE of void";
}
else if (thing === "PRINCE" && aspect === "MIND"){
    other.innerHTML = "you are a PRINCE of mind";
}
else if (thing === "PRINCE" && aspect === "HEART"){
    other.innerHTML = "you are a PRINCE of heart";
}
else if (thing === "PRINCE" && aspect === "RAGE"){
    other.innerHTML = "you are a PRINCE of rage";
}
else if (thing === "PRINCE" && aspect === "HOPE"){
    other.innerHTML = "you are a PRINCE of hope";
}
else if (thing === "PRINCE" && aspect === "DOOM"){
    other.innerHTML = "you are a PRINCE of doom";
}
else if (thing === "PRINCE" && aspect === "LIFE"){
    other.innerHTML = "you are a PRINCE of life";
} 
else if (thing === "BARD" && aspect === "BREATH") {
    other.innerHTML = "you are a BARD of breath";
}
else if (thing === "BARD" && aspect === "blood") {
    other.innerHTML = "you are a BARD of blood";
}
else if (thing === "BARD" && aspect === "TIME"){
    other.innerHTML = "you are a BARD of time";
}
else if (thing === "BARD" && aspect === "SPACE"){
    other.innerHTML = "you are a BARD of space";
}
else if (thing === "BARD" && aspect === "LIGHT"){
    other.innerHTML = "you are a BARD of light";
}
else if (thing === "BARD" && aspect === "VOID"){
    other.innerHTML = "you are a BARD of void";
}
else if (thing === "BARD" && aspect === "MIND"){
    other.innerHTML = "you are a BARD of mind";
}
else if (thing === "BARD" && aspect === "HEART"){
    other.innerHTML = "you are a BARD of heart";
}
else if (thing === "BARD" && aspect === "RAGE"){
    other.innerHTML = "you are a BARD of rage";
}
else if (thing === "BARD" && aspect === "HOPE"){
    other.innerHTML = "you are a BARD of hope";
}
else if (thing === "BARD" && aspect === "DOOM"){
    other.innerHTML = "you are a BARD of doom";
}
else if (thing === "BARD" && aspect === "LIFE"){
    other.innerHTML = "you are a BARD of life";
} 
else if (thing === "KNIGHT" && aspect === "BREATH") {
    other.innerHTML = "you are a KNIGHT of breath";
}
else if (thing === "KNIGHT" && aspect === "blood") {
    other.innerHTML = "you are a KNIGHT of blood";
}
else if (thing === "KNIGHT" && aspect === "TIME"){
    other.innerHTML = "you are a KNIGHT of time";
}
else if (thing === "KNIGHT" && aspect === "SPACE"){
    other.innerHTML = "you are a KNIGHT of space";
}
else if (thing === "KNIGHT" && aspect === "LIGHT"){
    other.innerHTML = "you are a KNIGHT of light";
}
else if (thing === "KNIGHT" && aspect === "VOID"){
    other.innerHTML = "you are a KNIGHT of void";
}
else if (thing === "KNIGHT" && aspect === "MIND"){
    other.innerHTML = "you are a KNIGHT of mind";
}
else if (thing === "KNIGHT" && aspect === "HEART"){
    other.innerHTML = "you are a KNIGHT of heart";
}
else if (thing === "KNIGHT" && aspect === "RAGE"){
    other.innerHTML = "you are a KNIGHT of rage";
}
else if (thing === "KNIGHT" && aspect === "HOPE"){
    other.innerHTML = "you are a KNIGHT of hope";
}
else if (thing === "KNIGHT" && aspect === "DOOM"){
    other.innerHTML = "you are a KNIGHT of doom";
}
else if (thing === "KNIGHT" && aspect === "LIFE"){
    other.innerHTML = "you are a KNIGHT of life";
} 
else if (thing === "PAGE" && aspect === "BREATH") {
    other.innerHTML = "you are a PAGE of breath";
}
else if (thing === "PAGE" && aspect === "blood") {
    other.innerHTML = "you are a PAGE of blood";
}
else if (thing === "PAGE" && aspect === "TIME"){
    other.innerHTML = "you are a PAGE of time";
}
else if (thing === "PAGE" && aspect === "SPACE"){
    other.innerHTML = "you are a PAGE of space";
}
else if (thing === "PAGE" && aspect === "LIGHT"){
    other.innerHTML = "you are a PAGE of light";
}
else if (thing === "PAGE" && aspect === "VOID"){
    other.innerHTML = "you are a PAGE of void";
}
else if (thing === "PAGE" && aspect === "MIND"){
    other.innerHTML = "you are a PAGE of mind";
}
else if (thing === "PAGE" && aspect === "HEART"){
    other.innerHTML = "you are a PAGE of heart";
}
else if (thing === "PAGE" && aspect === "RAGE"){
    other.innerHTML = "you are a PAGE of rage";
}
else if (thing === "PAGE" && aspect === "HOPE"){
    other.innerHTML = "you are a PAGE of hope";
}
else if (thing === "PAGE" && aspect === "DOOM"){
    other.innerHTML = "you are a PAGE of doom";
}
else if (thing === "PAGE" && aspect === "LIFE"){
    other.innerHTML = "you are a PAGE of life";
} 
else {
    other.innerHTML = "";
}



document.getElementById("classpect").innerHTML = thing + ' of ' + aspect;
}