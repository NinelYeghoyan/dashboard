import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "@common/components/PageHeader";
import PaginationWrapper from "@features/dashboard/components/PaginationWrapper";
import Table from "@features/dashboard/components/Table";
import TableSkeleton from "@features/dashboard/components/Table/Skeleton";
import { useGetUsersQuery } from "@features/dashboard/dashboardAPI";
import PageLayout from "@layout/PageLayout";
import { routes } from "@routes/routes";

const Home: FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState("registeredDate");
    const [sortOrder, setSortOrder] = useState("desc");
    const itemsPerPage = 10;

    const { data, isLoading } = useGetUsersQuery({
        page: currentPage,
        limit: itemsPerPage,
        sort: sortColumn,
        order: sortOrder,
    });
    const totalPages = data ? Math.ceil(data.totalCount / itemsPerPage) : 0;

    const handleSortChange = (newSort: string, newOrder: string) => {
        setSortColumn(newSort);
        setSortOrder(newOrder);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleRedirect = () => {
        navigate(routes.newUser.path);
    };

    return (
        <PageLayout className="BS-home">
            <div className="grow">
                <PageHeader title="allUsers" buttonText="newUser" onRedirect={handleRedirect} />

                {!data && isLoading && <TableSkeleton className="mt-26" />}

                {data && !isLoading && (
                    <Table data={data?.usersData} handleSortChange={handleSortChange} className="mt-26" />
                )}
            </div>

            {data && (
                <PaginationWrapper
                    totalUsers={data.totalCount}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                    className="mt-60"
                />
            )}
        </PageLayout>
    );
};
export default Home;
