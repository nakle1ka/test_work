import React from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';

type Props = {
    totalPages: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
}

export const PostPagination: React.FC<Props> = ({ totalPages, currentPage, nextPage, prevPage }) => {
    return (
        <Pagination>
            {
                currentPage !== 1 && (
                    <PaginationContent>
                        <PaginationPrevious href={`/posts?page=${prevPage}`} />
                    </PaginationContent>
                )
            }

            {
                currentPage !== 1 && (
                    <PaginationContent>
                        <PaginationLink href={`/posts?page=${prevPage}`}>{prevPage}</PaginationLink>
                    </PaginationContent>
                )
            }

            <PaginationContent>
                <PaginationLink href={`/posts?page=${currentPage}`}>{currentPage}</PaginationLink>
            </PaginationContent>

            {
                currentPage !== 10 && (
                    <PaginationContent>
                        <PaginationLink href={`/posts?page=${nextPage}`}>{nextPage}</PaginationLink>
                    </PaginationContent>)
            }

            {
                (currentPage !== 9 && currentPage !== 10) && (
                    <PaginationContent>
                        <PaginationEllipsis />
                    </PaginationContent>
                )
            }

            {
                currentPage !== 10 && (
                    <PaginationContent>
                        <PaginationNext href={`/posts?page=${nextPage}`} />
                    </PaginationContent>
                )
            }
        </Pagination>
    );
}