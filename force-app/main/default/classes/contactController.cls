public with sharing class contactController {
    @AuraEnabled(cacheable=true)
    public static List<contact> getcontacts(){
        return [SELECT Id,Name FROM contact Limit 10];
        
    }
}
