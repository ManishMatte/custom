namespace db;

entity Student {
    key ID:Integer;
    name : String(100);
    gender:  String(1) enum {M = 'Male'; F = 'Female'};
}