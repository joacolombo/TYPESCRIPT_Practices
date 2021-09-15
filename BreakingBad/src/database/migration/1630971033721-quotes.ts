import {MigrationInterface, QueryRunner} from "typeorm";

export class quotes1630971033721 implements MigrationInterface {
    name = 'quotes1630971033721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`breakingbadquotes\`.\`quotes\` (\`quote_id\` int NOT NULL AUTO_INCREMENT, \`quote\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`series\` varchar(255) NOT NULL, PRIMARY KEY (\`quote_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`breakingbadquotes\`.\`quotes\``);
    }

}
